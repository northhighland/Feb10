exports.config = {
  helpers: {
    WebDriver: {
      url: "www.google.com",
      //MicrosoftEdge//firefox//chrome
      browser: "chrome",
      restart: true,
      windowSize: "1920x1680",
      waitForTimeout: 10000,
      waitForElement: 5000,
      smartWait: 5000,
      waitForText: 5000,
      waitForInvisible: 10000,
      desiredCapabilities: {
        buildName:
          process.env.profile === "remote"
            ? process.env.BROWSERSTACK_BUILD_NAME
            : undefined,
      },
    },
    BrowserStackSession: {
      require: "./utils/browserstack_session.js",
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  gherkin: {
    features: "./features/**/*.feature",
    steps: ["./step_definitions/commonSteps.js"],
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: "loginAs",
      users: {
        admin: {},
      },
    },
    screenshotOnFail: {
      enabled: true,
    },
    customHooks: {
      require: "./utils/hooks",
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
      minTimeout: 3000,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./out",
    },
    customLocator: {
      enabled: true,
      prefix: "&",
      attribute: "href",
    },
  },
  tests: "./features/**/*.feature",
  name: "Feb 10 Test",
};
