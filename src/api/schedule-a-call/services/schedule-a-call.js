'use strict';

/**
 * schedule-a-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-a-call.schedule-a-call');
