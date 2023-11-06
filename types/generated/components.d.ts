import type { Schema, Attribute } from '@strapi/strapi';

export interface PriceServiceItem extends Schema.Component {
  collectionName: 'components_price_service_items';
  info: {
    displayName: 'Service Item';
    description: '';
  };
  attributes: {
    item_title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    price: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    unique_id: Attribute.String & Attribute.Required;
  };
}

export interface SharedCaseStudySection extends Schema.Component {
  collectionName: 'components_shared_case_study_sections';
  info: {
    displayName: 'Case Study Section';
    description: '';
  };
  attributes: {
    first_title: Attribute.String & Attribute.Required;
    second_title: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    casestudy_card: Attribute.Component<'usp.case-study-card', true> &
      Attribute.Required;
    down_cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedCroOpportunities extends Schema.Component {
  collectionName: 'components_shared_cro_opportunities';
  info: {
    displayName: 'CRO Opportunities';
  };
  attributes: {
    first_title: Attribute.String & Attribute.Required;
    second_title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    cro_button: Attribute.Text & Attribute.Required;
    cta1: Attribute.String & Attribute.Required;
    cta2: Attribute.String & Attribute.Required;
    cta3: Attribute.String & Attribute.Required;
    cta4: Attribute.String & Attribute.Required;
    opportunities1: Attribute.String & Attribute.Required;
    opportunities2: Attribute.String & Attribute.Required;
    opportunities3: Attribute.String & Attribute.Required;
    opportunities4: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedServiceHero extends Schema.Component {
  collectionName: 'components_shared_service_heroes';
  info: {
    displayName: 'Service Hero';
  };
  attributes: {
    first_title: Attribute.String & Attribute.Required;
    second_title: Attribute.String & Attribute.Required;
    hero_description: Attribute.Text & Attribute.Required;
    hero_button: Attribute.String & Attribute.Required;
    short_description: Attribute.String & Attribute.Required;
    left_image: Attribute.Media & Attribute.Required;
    right_image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedServiceUspSection extends Schema.Component {
  collectionName: 'components_shared_service_usp_sections';
  info: {
    displayName: 'Service USP Section';
    description: '';
  };
  attributes: {
    first_title: Attribute.String & Attribute.Required;
    second_title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    card_content: Attribute.Component<'usp.usp-card', true> &
      Attribute.Required;
  };
}

export interface UspCaseStudyCard extends Schema.Component {
  collectionName: 'components_usp_case_study_cards';
  info: {
    displayName: 'Case Study Card';
    description: '';
  };
  attributes: {
    case_category: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String &
      Attribute.Unique &
      Attribute.DefaultTo<'Please provide a unique slug'>;
  };
}

export interface UspUspCard extends Schema.Component {
  collectionName: 'components_usp_usp_cards';
  info: {
    displayName: 'USP card';
  };
  attributes: {
    card_image: Attribute.Media & Attribute.Required;
    card_heading: Attribute.String & Attribute.Required;
    card_description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'price.service-item': PriceServiceItem;
      'shared.case-study-section': SharedCaseStudySection;
      'shared.cro-opportunities': SharedCroOpportunities;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.service-hero': SharedServiceHero;
      'shared.service-usp-section': SharedServiceUspSection;
      'usp.case-study-card': UspCaseStudyCard;
      'usp.usp-card': UspUspCard;
    }
  }
}
