'use strict';

/**
 * career-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
    "api::career-detail.career-detail",
    // @ts-ignore
    ({ strapi }) => ({
  
  
      async findOne(ctx) {
        const { id } = ctx.params;
  
        // sanitizeQuery to remove any query params that are invalid or the user does not have access to
        // It is strongly recommended to use sanitizeQuery even if validateQuery is used
        const entity = await strapi.db
          .query("api::career-detail.career-detail")
          .findOne({
            where: { slug: id },
            populate: [
              "career_details",
              "seo",
            ],
          });
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);
  
        return this.transformResponse(sanitizedResults);
      },
    })
  );
