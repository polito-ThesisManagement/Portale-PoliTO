const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'twh9wt',
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
