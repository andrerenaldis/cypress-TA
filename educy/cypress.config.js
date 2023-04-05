const { defineConfig } = require("cypress");

module.exports = defineConfig({
	videoCompression: false, 
  viewportWidth: 1280, 
  viewportHeight: 720, 
  defaultCommandTimeout:60000, 
  requestTimeout : 30000, 
  numTestsKeptInMemory: 0, 
  responseTimeout : 50000, 
  pageLoadTimeout: 120000,
  e2e: {
  		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      excludeSpecPattern: [
			// '**/1-getting-started/*', 
			// '**/2-advanced-examples/*'
    	],
setupNodeEvents(on, config) {

		},
  }
});
//ubah liat video step definition