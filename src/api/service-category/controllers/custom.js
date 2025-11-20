"use strict";

module.exports = {
  async getVaccination(ctx) {
    const data = await strapi.entityService.findMany(
      "api::service-category.service-category",
      {
        filters: {
          title: "Вакцинация и чипирование",
        },
        populate: {
          subcategories: {
            populate: {
              items: true,
            },
          },
        },
      }
    );

    ctx.body = data;
  },

  async getDermatology(ctx) {
    const data = await strapi.entityService.findMany(
      "api::service-category.service-category",
      {
        filters: {
          title: "Дерматология",
        },
        populate: {
          subcategories: {
            populate: {
              items: true,
            },
          },
        },
      }
    );

    ctx.body = data;
  },

  async getReanimation(ctx) {
    const data = await strapi.entityService.findMany(
      "api::service-category.service-category",
      {
        filters: { title: "Реанимация и интенсивная терапия" },
        populate: {
          subcategories: { populate: { items: true } },
        },
      }
    );
    ctx.body = data;
  },
};
