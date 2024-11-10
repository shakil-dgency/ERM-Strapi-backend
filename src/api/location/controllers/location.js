"use strict";

/**
 * location controller
 */

// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;
const qs = require("qs");

// module.exports = createCoreController('api::location.location');

module.exports = createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      // const { populate } = ctx.query;
      const queryParams = qs.parse(ctx.query);

      // console.log(queryParams);

      // Default populate object for required fields
      let defaultPopulate = {
        hero: {
          populate: {
            background_image: true,
            left_image: true,
            right_image: true,
            mobile_background_image: true,
          },
        },
        world_map: {
          populate: {
            image: true,
          },
        },
        cro_opportunities: {
          populate: {
            cro_opportunity_image: true,
          },
        },

        other_services: {
          populate: {
            other_services_card: {
              populate: {
                card_image: true,
              },
            },
          },
        },
        campain_strategy:{
          populate:{
            strategy_card :{
              populate:{
                image: true,
              }
            }
          }
        },
        casestudy_section:{
          populate:{
            case_studies:true
          }
        },
        google_analytics: {
          populate: {
            image: true,
          },
        },
        our_clients: {
          populate: {
            company_images: true,
          },
        },
        only_erm_agency: {
          populate: {
            only_erm_agency_card: {
              populate: {
                image: true,
              },
            },
          },
        },
        wining_strategy: {
          populate: {
            strategy_image_1: true,
            strategy_image_2: true,
          },
        },
        testimonial_carousel: {
            populate: {
                testimonial_data: {
                populate: {
                    persons_image: true,
                    company_logo: true,
                },
              },
            },
          },
          footer_top_cta:true 
      };

      // Parse the populate query parameter if it exists
      let populateObject;
      if (queryParams.populate) {
        populateObject = queryParams.populate;
      } else {
        populateObject = defaultPopulate;
      }

      // sanitizeQuery to remove any query params that are invalid or the user does not have access to
      // It is strongly recommended to use sanitizeQuery even if validateQuery is used
      // Fetch the entity with the dynamically built populate object
      const entity = await strapi.db.query("api::location.location").findOne({
        where: { slug: id },
        populate: populateObject,
      });

      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
