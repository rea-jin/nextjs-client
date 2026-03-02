const config = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...config,
  {
    settings: {
      react: {
        version: "19",
      },
    },
  },
];
