const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const { defineConfig } = require('cypress') 
 
      module.exports = defineConfig({ 
        e2e: {
          setupNodeEvents(on, config) {},
          videoCompression: false, 
          viewportWidth: 1280, 
          viewportHeight: 720, 
          defaultCommandTimeout:60000, 
          requestTimeout : 30000, 
          numTestsKeptInMemory: 0, 
          responseTimeout : 50000, 
          pageLoadTimeout: 120000,
        },
      })
     }
  }
});
//ubah liat video step definition