const { setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: 'codeceptjs/*_test.js',
  output: 'codeceptjs/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:5000',
      show: false,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'full-stack-open-pokedex',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}