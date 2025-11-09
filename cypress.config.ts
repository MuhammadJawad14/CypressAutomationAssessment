const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');
let token: { value: string; timestamp: number } | null;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };
      await on('file:preprocessor', cucumber(options));
      await on('task', {
        setToken(val) {
          token = { value: val, timestamp: Date.now() };
          return token;
        },
        getToken() {
          return token ?? null;
        },
      });
      return config;
    },
    
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/features/*.feature",
    defaultCommandTimeout: 20000,
    requestTimeout: 20000,
    responseTimeout: 30000,
    defaulpageLoadTimeout: 100000,
    chromeWebSecurity: false,

  },
});
