import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "7s5okt",
  viewportHeight: 1000,
  viewportWidth: 1280,
  responseTimeout: 120e3,

  retries: {
    runMode: 2,
    openMode: 1,
  },

  env: {
    apiUrl: "http://localhost:3001",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
    },
  },

  experimentalStudio: true,

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
