"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // sanitizeQuery to remove any query params that are invalid or the user does not have access to
    // It is strongly recommended to use sanitizeQuery even if validateQuery is used
    const entity = await strapi.db.query("api::blog.blog").findOne({
      where: { slug: id },
      populate: ["cover_image", "seo"],
    });
    const sanitizedResults = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedResults);
  },
}));
