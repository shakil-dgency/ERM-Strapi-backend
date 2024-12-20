import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    portfolio: Attribute.Component<'more.portfolio'> & Attribute.Required;
    why_choose_us: Attribute.Component<'more.why-choose-us'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAllServicePageAllServicePage extends Schema.SingleType {
  collectionName: 'all_service_pages';
  info: {
    singularName: 'all-service-page';
    pluralName: 'all-service-pages';
    displayName: 'All Service Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    marketing_plan: Attribute.Component<'free-marketing.marketing-plan'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::all-service-page.all-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::all-service-page.all-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    cover_image: Attribute.Media;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    pin_post: Attribute.Boolean;
    pinpost_id: Attribute.UID;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages';
  info: {
    singularName: 'blog-page';
    pluralName: 'blog-pages';
    displayName: 'Blog Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.SingleType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    employee_quality: Attribute.Component<'more.quality-of-a-employee'> &
      Attribute.Required;
    job_post: Attribute.Component<'more.job-post'> & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerDetailCareerDetail extends Schema.CollectionType {
  collectionName: 'career_details';
  info: {
    singularName: 'career-detail';
    pluralName: 'career-details';
    displayName: 'Career Detail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title_first_line: Attribute.String;
    title_second_line: Attribute.String;
    job_title: Attribute.String;
    slug: Attribute.UID<'api::career-detail.career-detail', 'job_title'>;
    about_company: Attribute.Text;
    location: Attribute.String;
    business_type: Attribute.String;
    facilities: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    short_description: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    career_details: Attribute.Component<'more.career-details', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career-detail.career-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career-detail.career-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseStudiesPageCaseStudiesPage extends Schema.SingleType {
  collectionName: 'case_studies_pages';
  info: {
    singularName: 'case-studies-page';
    pluralName: 'case-studies-pages';
    displayName: 'Case Studies Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-studies-page.case-studies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-studies-page.case-studies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseStudyCaseStudy extends Schema.CollectionType {
  collectionName: 'case_studies';
  info: {
    singularName: 'case-study';
    pluralName: 'case-studies';
    displayName: 'Case Studies';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_category: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::case-study.case-study', 'title'> &
      Attribute.Required;
    statistic_1: Attribute.String & Attribute.Required;
    statistic_2: Attribute.String & Attribute.Required;
    statistic_3: Attribute.String & Attribute.Required;
    statistic_4: Attribute.String & Attribute.Required;
    statistic_1_title: Attribute.String & Attribute.Required;
    statistic_2_title: Attribute.String & Attribute.Required;
    statistic_3_title: Attribute.String & Attribute.Required;
    statistic_4_title: Attribute.String & Attribute.Required;
    case_details: Attribute.Component<'more.case-studies-details', true> &
      Attribute.Required;
    about_client: Attribute.Text & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    business_type: Attribute.String & Attribute.Required;
    card_cta: Attribute.String & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    service_rendered: Attribute.Component<'more.services-rendered', true>;
    case_details_note_title: Attribute.String;
    case_details_note_description: Attribute.Text;
    card_image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: 'contact_pages';
  info: {
    singularName: 'contact-page';
    pluralName: 'contact-pages';
    displayName: 'Contact Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    contact_card_title: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    description_title_firstline: Attribute.String & Attribute.Required;
    description_title_secondline: Attribute.String;
    list_descriptor: Attribute.String & Attribute.Required;
    lists: Attribute.Component<'usp.contact-list', true> & Attribute.Required;
    phone_number: Attribute.String & Attribute.Required;
    contact_cta: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDemoCallDemoCall extends Schema.SingleType {
  collectionName: 'demo_calls';
  info: {
    singularName: 'demo-call';
    pluralName: 'demo-calls';
    displayName: 'Demo Call';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text;
    section_title: Attribute.String & Attribute.Required;
    lists: Attribute.Component<'usp.contact-card', true>;
    calendar_url: Attribute.Text;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::demo-call.demo-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::demo-call.demo-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmailMarketingEmailMarketing extends Schema.SingleType {
  collectionName: 'email_marketings';
  info: {
    singularName: 'email-marketing';
    pluralName: 'email-marketings';
    displayName: 'Email Marketing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    content_types: Attribute.Component<'shared.content-types'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    customer_handling_email: Attribute.Component<'shared.customer-handling-email'> &
      Attribute.Required;
    email_domain_priority: Attribute.Component<'shared.email-domain-priority'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::email-marketing.email-marketing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::email-marketing.email-marketing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFacebookAndInstagramAdFacebookAndInstagramAd
  extends Schema.SingleType {
  collectionName: 'facebook_and_instagram_ads';
  info: {
    singularName: 'facebook-and-instagram-ad';
    pluralName: 'facebook-and-instagram-ads';
    displayName: 'Facebook and Instagram Ads';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'>;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'>;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::facebook-and-instagram-ad.facebook-and-instagram-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::facebook-and-instagram-ad.facebook-and-instagram-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'Faqs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    question_and_answer: Attribute.Component<
      'usp.faq-question-and-answer',
      true
    > &
      Attribute.Required;
    question_and_answer_another_section: Attribute.Component<
      'usp.faq-question-and-answer',
      true
    > &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFreeMarketingPlanFreeMarketingPlan
  extends Schema.SingleType {
  collectionName: 'free_marketing_plans';
  info: {
    singularName: 'free-marketing-plan';
    pluralName: 'free-marketing-plans';
    displayName: 'Free Marketing Plan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    card_view: Attribute.Component<'free-marketing.free-marketing-hero-card'> &
      Attribute.Required;
    free_marketing_banner: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::free-marketing-plan.free-marketing-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::free-marketing-plan.free-marketing-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoogleAdsAgencyGoogleAdsAgency extends Schema.SingleType {
  collectionName: 'google_ads_agencies';
  info: {
    singularName: 'google-ads-agency';
    pluralName: 'google-ads-agencies';
    displayName: 'Google Ads Agency';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-ads-agency.google-ads-agency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::google-ads-agency.google-ads-agency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    our_clients: Attribute.Component<'home.our-clients'> & Attribute.Required;
    only_erm_agency: Attribute.Component<'home.only-erm-agency'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    your_team_response: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    wining_strategy: Attribute.Component<'home.wining-strategy'> &
      Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    google_analytics: Attribute.Component<'home.google-analytics'> &
      Attribute.Required;
    world_map: Attribute.Component<'home.world-map'>;
    casestudy_section: Attribute.Component<'shared.case-study-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageDevelopmentLandingPageDevelopment
  extends Schema.SingleType {
  collectionName: 'landing_page_developments';
  info: {
    singularName: 'landing-page-development';
    pluralName: 'landing-page-developments';
    displayName: 'Landing page Development';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page-development.landing-page-development',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page-development.landing-page-development',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLinkedInAdLinkedInAd extends Schema.SingleType {
  collectionName: 'linked_in_ads';
  info: {
    singularName: 'linked-in-ad';
    pluralName: 'linked-in-ads';
    displayName: 'LinkedIn Ads';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'>;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    fine_tune_website: Attribute.Component<'more.fine-tuned-website'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::linked-in-ad.linked-in-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::linked-in-ad.linked-in-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations';
  info: {
    singularName: 'location';
    pluralName: 'locations';
    displayName: 'Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'location.location-hero'>;
    world_map: Attribute.Component<'home.world-map'>;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'>;
    google_analytics: Attribute.Component<'home.google-analytics'>;
    other_services: Attribute.Component<'shared.all-service-section'>;
    our_clients: Attribute.Component<'home.our-clients'>;
    only_erm_agency: Attribute.Component<'home.only-erm-agency'>;
    wining_strategy: Attribute.Component<'home.wining-strategy'>;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'>;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'>;
    slug: Attribute.UID<'api::location.location', 'country_name'>;
    country_name: Attribute.String & Attribute.Required;
    location_id: Attribute.UID;
    campain_strategy: Attribute.Component<'location.campain-strategy'>;
    casestudy_section: Attribute.Component<'shared.case-study-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMicrosoftAdMicrosoftAd extends Schema.SingleType {
  collectionName: 'microsoft_ads';
  info: {
    singularName: 'microsoft-ad';
    pluralName: 'microsoft-ads';
    displayName: 'Microsoft Ads';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::microsoft-ad.microsoft-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::microsoft-ad.microsoft-ad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotFoundErrorNotFoundError extends Schema.SingleType {
  collectionName: 'not_found_errors';
  info: {
    singularName: 'not-found-error';
    pluralName: 'not-found-errors';
    displayName: 'Not Found Error';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title_first_line: Attribute.String;
    title_second_line: Attribute.String;
    short_description: Attribute.String;
    cta: Attribute.String;
    cta_slug: Attribute.String;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::not-found-error.not-found-error',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::not-found-error.not-found-error',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurWorkOurWork extends Schema.SingleType {
  collectionName: 'our_works';
  info: {
    singularName: 'our-work';
    pluralName: 'our-works';
    displayName: 'Our Works';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    website_section: Attribute.Component<'projects.website-display'> &
      Attribute.Required;
    google_ads_section: Attribute.Component<'projects.website-display'>;
    microsoft_ads_section: Attribute.Component<'projects.website-display'>;
    display_ads_section: Attribute.Component<'projects.website-display'>;
    social_media_section: Attribute.Component<'projects.website-display'>;
    seo_section: Attribute.Component<'projects.website-display'>;
    html_ads_section: Attribute.Component<'projects.html5-ads'>;
    ceo_speach: Attribute.Component<'projects.ceo-s-talk'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-work.our-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-work.our-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerProgramPartnerProgram extends Schema.SingleType {
  collectionName: 'partner_programs';
  info: {
    singularName: 'partner-program';
    pluralName: 'partner-programs';
    displayName: 'Partner Program';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    testimonial: Attribute.Component<'partner-program.single-testimonial'>;
    short_intro: Attribute.Component<'partner-program.short-intro'>;
    services: Attribute.Component<'partner-program.services'>;
    faq_section: Attribute.Component<'shared.faq-section'>;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'>;
    steps_section: Attribute.Component<'partner-program.steps-section'>;
    partner_hero: Attribute.Component<'partner-program.partner-hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner-program.partner-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner-program.partner-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricePrice extends Schema.CollectionType {
  collectionName: 'prices';
  info: {
    singularName: 'price';
    pluralName: 'prices';
    displayName: 'Price';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    service_title: Attribute.String & Attribute.Required;
    service_item: Attribute.DynamicZone<['price.service-item']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricePageInformationPricePageInformation
  extends Schema.SingleType {
  collectionName: 'price_page_informations';
  info: {
    singularName: 'price-page-information';
    pluralName: 'price-page-informations';
    displayName: 'Price Page Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_description: Attribute.Text & Attribute.Required;
    price_card_heading: Attribute.Text & Attribute.Required;
    price_card_inside_note: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'NB:'>;
    price_card_outside_note: Attribute.Text & Attribute.Required;
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price-page-information.price-page-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price-page-information.price-page-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Privacy_body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizzQuizz extends Schema.SingleType {
  collectionName: 'quizzes';
  info: {
    singularName: 'quizz';
    pluralName: 'quizzes';
    displayName: 'Quizzes';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quizz.quizz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quizz.quizz',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizzDetailQuizzDetail extends Schema.CollectionType {
  collectionName: 'quizz_details';
  info: {
    singularName: 'quizz-detail';
    pluralName: 'quizz-details';
    displayName: 'Quizz Details';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    quizz_title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::quizz-detail.quizz-detail', 'quizz_title'> &
      Attribute.Required;
    quizz_tag: Attribute.String & Attribute.Required;
    card_description: Attribute.String & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    quizz_card_image: Attribute.Media & Attribute.Required;
    quizz_card_cta: Attribute.String & Attribute.Required;
    quizz_image_left: Attribute.Media & Attribute.Required;
    quizz_image_right: Attribute.Media & Attribute.Required;
    body_cta: Attribute.String & Attribute.Required;
    nav_icon: Attribute.Media & Attribute.Required;
    nav_short_description: Attribute.String & Attribute.Required;
    body_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    seo: Attribute.Component<'shared.seo'>;
    main_quiz_link: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quizz-detail.quizz-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quizz-detail.quizz-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScheduleACallScheduleACall extends Schema.SingleType {
  collectionName: 'schedule_a_calls';
  info: {
    singularName: 'schedule-a-call';
    pluralName: 'schedule-a-calls';
    displayName: 'Client Call';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_title_first_line: Attribute.String & Attribute.Required;
    hero_title_second_line: Attribute.String;
    description: Attribute.Text;
    section_title: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'>;
    lists: Attribute.Component<'usp.contact-card', true>;
    calendar_url: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::schedule-a-call.schedule-a-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::schedule-a-call.schedule-a-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchEngineOptimizationSearchEngineOptimization
  extends Schema.SingleType {
  collectionName: 'search_engine_optimizations';
  info: {
    singularName: 'search-engine-optimization';
    pluralName: 'search-engine-optimizations';
    displayName: ' Search Engine Optimization (SEO)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'>;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    content_types: Attribute.Component<'shared.content-types'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    fine_tune_website: Attribute.Component<'more.fine-tuned-website'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-engine-optimization.search-engine-optimization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::search-engine-optimization.search-engine-optimization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaManagementSocialMediaManagement
  extends Schema.SingleType {
  collectionName: 'social_media_managements';
  info: {
    singularName: 'social-media-management';
    pluralName: 'social-media-managements';
    displayName: 'Social Media Management';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'>;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'>;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media-management.social-media-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-media-management.social-media-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.SingleType {
  collectionName: 'teams';
  info: {
    singularName: 'team';
    pluralName: 'teams';
    displayName: 'Team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    team_member: Attribute.Component<'more.team-member'> & Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTermsOfServiceTermsOfService extends Schema.SingleType {
  collectionName: 'terms_of_services';
  info: {
    singularName: 'terms-of-service';
    pluralName: 'terms-of-services';
    displayName: 'Terms Of Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    conditions_body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-of-service.terms-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-of-service.terms-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.SingleType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonials';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.other-hero'> & Attribute.Required;
    testimonials: Attribute.Component<'shared.testimonial-carousel'> &
      Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiThankYouThankYou extends Schema.SingleType {
  collectionName: 'thank_yous';
  info: {
    singularName: 'thank-you';
    pluralName: 'thank-yous';
    displayName: 'Thank You';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    calender_top_message: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    calenly_url: Attribute.String;
    calender_bottom_message: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::thank-you.thank-you',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::thank-you.thank-you',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteDevelopmentWebsiteDevelopment
  extends Schema.SingleType {
  collectionName: 'website_developments';
  info: {
    singularName: 'website-development';
    pluralName: 'website-developments';
    displayName: 'Website Development';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'shared.service-hero'> & Attribute.Required;
    usp_section: Attribute.Component<'shared.service-usp-section'> &
      Attribute.Required;
    cro_opportunities: Attribute.Component<'shared.cro-opportunities'> &
      Attribute.Required;
    casestudy_section: Attribute.Component<'shared.case-study-section'> &
      Attribute.Required;
    list_of_service: Attribute.Component<'shared.list-of-service'> &
      Attribute.Required;
    choose_how_you_work: Attribute.Component<'shared.key-service'> &
      Attribute.Required;
    section_break_cta: Attribute.Component<'shared.section-break-cta'> &
      Attribute.Required;
    other_services: Attribute.Component<'shared.all-service-section'> &
      Attribute.Required;
    dedicated_team: Attribute.Component<'shared.dedicated-team'> &
      Attribute.Required;
    report_graph: Attribute.Component<'shared.report-graph'> &
      Attribute.Required;
    faq_section: Attribute.Component<'shared.faq-section'> & Attribute.Required;
    footer_top_cta: Attribute.Component<'shared.footer-top-cta'> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    testimonial_carousel: Attribute.Component<'shared.testimonial-carousel'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website-development.website-development',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::website-development.website-development',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::all-service-page.all-service-page': ApiAllServicePageAllServicePage;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-page.blog-page': ApiBlogPageBlogPage;
      'api::career.career': ApiCareerCareer;
      'api::career-detail.career-detail': ApiCareerDetailCareerDetail;
      'api::case-studies-page.case-studies-page': ApiCaseStudiesPageCaseStudiesPage;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::demo-call.demo-call': ApiDemoCallDemoCall;
      'api::email-marketing.email-marketing': ApiEmailMarketingEmailMarketing;
      'api::facebook-and-instagram-ad.facebook-and-instagram-ad': ApiFacebookAndInstagramAdFacebookAndInstagramAd;
      'api::faq.faq': ApiFaqFaq;
      'api::free-marketing-plan.free-marketing-plan': ApiFreeMarketingPlanFreeMarketingPlan;
      'api::google-ads-agency.google-ads-agency': ApiGoogleAdsAgencyGoogleAdsAgency;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::landing-page-development.landing-page-development': ApiLandingPageDevelopmentLandingPageDevelopment;
      'api::linked-in-ad.linked-in-ad': ApiLinkedInAdLinkedInAd;
      'api::location.location': ApiLocationLocation;
      'api::microsoft-ad.microsoft-ad': ApiMicrosoftAdMicrosoftAd;
      'api::not-found-error.not-found-error': ApiNotFoundErrorNotFoundError;
      'api::our-work.our-work': ApiOurWorkOurWork;
      'api::partner-program.partner-program': ApiPartnerProgramPartnerProgram;
      'api::price.price': ApiPricePrice;
      'api::price-page-information.price-page-information': ApiPricePageInformationPricePageInformation;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::quizz.quizz': ApiQuizzQuizz;
      'api::quizz-detail.quizz-detail': ApiQuizzDetailQuizzDetail;
      'api::schedule-a-call.schedule-a-call': ApiScheduleACallScheduleACall;
      'api::search-engine-optimization.search-engine-optimization': ApiSearchEngineOptimizationSearchEngineOptimization;
      'api::social-media-management.social-media-management': ApiSocialMediaManagementSocialMediaManagement;
      'api::team.team': ApiTeamTeam;
      'api::terms-of-service.terms-of-service': ApiTermsOfServiceTermsOfService;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::thank-you.thank-you': ApiThankYouThankYou;
      'api::website-development.website-development': ApiWebsiteDevelopmentWebsiteDevelopment;
    }
  }
}
