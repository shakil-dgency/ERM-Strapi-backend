"use strict";

/**
 * quizz-detail controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::quizz-detail.quizz-detail');

module.exports = createCoreController(
  "api::quizz-detail.quizz-detail",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      // sanitizeQuery to remove any query params that are invalid or the user does not have access to
      // It is strongly recommended to use sanitizeQuery even if validateQuery is used
      const entity = await strapi.db
        .query("api::quizz-detail.quizz-detail")
        .findOne({
          where: { slug: id },
          // populate: ["case_details", "hero_logo", "footer_top_cta"],
        });
      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
