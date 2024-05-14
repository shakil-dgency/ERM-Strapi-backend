"use strict";

/**
 * case-study controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::case-study.case-study');

module.exports = createCoreController(
  "api::case-study.case-study",
  // @ts-ignore
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      // sanitizeQuery to remove any query params that are invalid or the user does not have access to
      // It is strongly recommended to use sanitizeQuery even if validateQuery is used
      const entity = await strapi.db
        .query("api::case-study.case-study")
        .findOne({
          where: { slug: id },
          populate: [
            "case_details",
            "service_rendered",
            "card_image",
            "footer_top_cta",
            "seo",
          ],
        });
      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
