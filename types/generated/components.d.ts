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

export interface SharedAllServiceSection extends Schema.Component {
  collectionName: 'components_shared_all_service_sections';
  info: {
    displayName: 'All Service Section';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    all_service_card: Attribute.Component<'usp.all-service-card', true> &
      Attribute.Required;
  };
}

export interface SharedCaseStudySection extends Schema.Component {
  collectionName: 'components_shared_case_study_sections';
  info: {
    displayName: 'Case Study Section';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    casestudy_card: Attribute.Component<'usp.case-study-card', true> &
      Attribute.Required;
    descriptive_cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedCroOpportunities extends Schema.Component {
  collectionName: 'components_shared_cro_opportunities';
  info: {
    displayName: 'CRO Opportunities';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    cro_cta: Attribute.Text & Attribute.Required;
    cro_title1: Attribute.String & Attribute.Required;
    cro_title2: Attribute.String & Attribute.Required;
    cro_title3: Attribute.String & Attribute.Required;
    cro_title4: Attribute.String & Attribute.Required;
    cro_description1: Attribute.String & Attribute.Required;
    cro_description2: Attribute.String & Attribute.Required;
    cro_description3: Attribute.String & Attribute.Required;
    cro_description4: Attribute.String & Attribute.Required;
    cro_opportunity_image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedDedicatedTeam extends Schema.Component {
  collectionName: 'components_shared_dedicated_teams';
  info: {
    displayName: 'Dedicated Team';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    team_image: Attribute.Media & Attribute.Required;
    descriptive_cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedFaqSection extends Schema.Component {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'Faq Section';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    question_and_answer: Attribute.Component<
      'usp.faq-question-and-answer',
      true
    > &
      Attribute.Required;
    descriptive_cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedFooterTopCta extends Schema.Component {
  collectionName: 'components_shared_footer_top_ctas';
  info: {
    displayName: 'Footer Top CTA';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedKeyService extends Schema.Component {
  collectionName: 'components_shared_key_services';
  info: {
    displayName: 'Key Service';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    long_first_card: Attribute.Component<'usp.key-service-card'> &
      Attribute.Required;
    others_card: Attribute.Component<'usp.key-service-card', true> &
      Attribute.Required;
    descriptive_cta: Attribute.String & Attribute.Required;
  };
}

export interface SharedListOfService extends Schema.Component {
  collectionName: 'components_shared_list_of_services';
  info: {
    displayName: 'List of Service';
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    list_left: Attribute.Component<'usp.service-list', true> &
      Attribute.Required;
    list_right: Attribute.Component<'usp.service-list', true> &
      Attribute.Required;
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

export interface SharedReportGraph extends Schema.Component {
  collectionName: 'components_shared_report_graphs';
  info: {
    displayName: 'Report Graph';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
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
    description: '';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    hero_description: Attribute.Text & Attribute.Required;
    hero_cta: Attribute.String & Attribute.Required;
    description_under_cta: Attribute.String & Attribute.Required;
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
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    card_content: Attribute.Component<'usp.usp-card', true> &
      Attribute.Required;
  };
}

export interface SharedTestimonialCarousel extends Schema.Component {
  collectionName: 'components_shared_testimonial_carousels';
  info: {
    displayName: 'Testimonial Carousel';
    description: '';
  };
  attributes: {
    testimonial_data: Attribute.Component<'usp.testimonial-card', true> &
      Attribute.Required;
    descriptive_cta: Attribute.String & Attribute.Required;
  };
}

export interface UspAllServiceCard extends Schema.Component {
  collectionName: 'components_usp_all_service_cards';
  info: {
    displayName: 'All Service Card';
  };
  attributes: {
    card_title: Attribute.String & Attribute.Required;
    card_description: Attribute.Text & Attribute.Required;
    card_image: Attribute.Media & Attribute.Required;
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
      Attribute.DefaultTo<'Please provide a unique slug (ex: case-study1)'>;
  };
}

export interface UspFaqQuestionAndAnswer extends Schema.Component {
  collectionName: 'components_usp_faq_question_and_answers';
  info: {
    displayName: 'Faq Question And Answer';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface UspKeyServiceCard extends Schema.Component {
  collectionName: 'components_usp_key_service_cards';
  info: {
    displayName: 'Key Service Card';
  };
  attributes: {
    card_title: Attribute.String & Attribute.Required;
    short_description: Attribute.Text & Attribute.Required;
  };
}

export interface UspServiceList extends Schema.Component {
  collectionName: 'components_usp_service_lists';
  info: {
    displayName: 'Service List';
    description: '';
  };
  attributes: {
    list_title: Attribute.String & Attribute.Required;
    tooltip_description: Attribute.Text & Attribute.Required;
  };
}

export interface UspTestimonialCard extends Schema.Component {
  collectionName: 'components_usp_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    persons_message: Attribute.Text & Attribute.Required;
    persons_name: Attribute.String & Attribute.Required;
    persons_occupation: Attribute.String & Attribute.Required;
    persons_image: Attribute.Media & Attribute.Required;
    company_logo: Attribute.Media & Attribute.Required;
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
      'shared.all-service-section': SharedAllServiceSection;
      'shared.case-study-section': SharedCaseStudySection;
      'shared.cro-opportunities': SharedCroOpportunities;
      'shared.dedicated-team': SharedDedicatedTeam;
      'shared.faq-section': SharedFaqSection;
      'shared.footer-top-cta': SharedFooterTopCta;
      'shared.key-service': SharedKeyService;
      'shared.list-of-service': SharedListOfService;
      'shared.meta-social': SharedMetaSocial;
      'shared.report-graph': SharedReportGraph;
      'shared.seo': SharedSeo;
      'shared.service-hero': SharedServiceHero;
      'shared.service-usp-section': SharedServiceUspSection;
      'shared.testimonial-carousel': SharedTestimonialCarousel;
      'usp.all-service-card': UspAllServiceCard;
      'usp.case-study-card': UspCaseStudyCard;
      'usp.faq-question-and-answer': UspFaqQuestionAndAnswer;
      'usp.key-service-card': UspKeyServiceCard;
      'usp.service-list': UspServiceList;
      'usp.testimonial-card': UspTestimonialCard;
      'usp.usp-card': UspUspCard;
    }
  }
}
