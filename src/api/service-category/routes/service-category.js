"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/service-categories",
      handler: "service-category.find",
      config: { auth: false },
    },
    {
      method: "GET",
      path: "/service-categories/:id",
      handler: "service-category.findOne",
      config: { auth: false },
    },
  ],
};
