module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vaccination",
      handler: "custom.getVaccination",
    },
    {
      method: "GET",
      path: "/dermatology",
      handler: "custom.getDermatology",
    },
    {
      method: "GET",
      path: "/reanimation",
      handler: "custom.getReanimation",
    },
  ],
};
