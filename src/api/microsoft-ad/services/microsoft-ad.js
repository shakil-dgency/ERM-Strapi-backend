'use strict';

/**
 * microsoft-ad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::microsoft-ad.microsoft-ad');
