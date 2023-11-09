'use strict';

/**
 * email-marketing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-marketing.email-marketing');
