'use strict';

/**
 * not-found-error service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::not-found-error.not-found-error');
