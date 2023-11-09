'use strict';

/**
 * website-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-development.website-development');
