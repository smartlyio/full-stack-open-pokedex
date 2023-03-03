# Linting, Testing, and building for CI setups:

## Linting

ESLint is a well-known linter for Javascript, which is by far the most popular language in the industry at the moment, according to Stackoverflow survey.
It's an open-source linter designed specifically to allow developers to create their own rules. The base set of rules is pluggable, just like anything you'll write for yourself, so it's highly adaptable to project and team needs.

Prettier is also useful to a CI setup. It's basically a formatting ruleset you can plug into linters. It doesn't touch the code itself, only it's format, and it automatically reprints it in sync with the style guidelines.

## Testing

MochaJS has been one of the popular Javascript testing frameworks. It operates on Node.js and provides front-end and back-end asynchronous testing compatibility. Mocha has proven to be a well-established framework over the past few years with firm documentation support.

Jest is another popular Javascript testing framework used and maintained by Facebook. The Jest testing framework provides a "zero-configuration" testing experience. It is a highly preferred framework for applications based on React. It provides a straightforward and very convenient user interface. This framework comes bundled with exciting features like snapshot testing and a built-in tool for code coverage.

Cypress framework is a Javascript-based end-to-end testing framework built on top of Movhe making asynchronous testing simple and convenient. Unit tests in Cypress are executed without even having to run a web server making it the ideal tool for testing a JS/TS library that is meant to be used in the browser.

## Building

Webpack is one of the most widely used. It is a module bundler. Its main purpose is to bundle Javascript files for usage in a browser. It is capable of transforming, bundling, or packaging just about any resource or asset. Furthermore, it is made primarily for Javascript.

# CI Alternatives to Jenkins and Github Action

## GitLab

GitLab CI/CD tool is a part of GitLab and a powerful alternative to Jenkins. It is an open-source web interface that can be used to apply all the continuous methods like integration, delivery, and deployment to the project without any third-party application. It provides a user-friendly interface aling with distributed version control services similar to Github.

## CircleCI

Is a flexible tool with easy maintainance and can run in almost any environment. Every commit leads to automatic build execution. To add to it, if any new build is trigerred, any queued or running build is automatically cancelled. It provides integration with Github, Bitbucket, and Github Enterprise.

## AWS CodePipeline

Is a CI/CD service that easily and quickly automates release pipelines for updates. Every time you change your code, AWS CodePipeline will build, test, and deploy the application. It can also be easily integrated with Github.

# Cloud-based Environment

Nowadays as cloud computing grows more prevalent, managed solutions for core functions like CI/CD are becoming more attractive. In this case, a small application with few resources working on it, managed cloud-based CI service is a better approach. It allows the development team to focus on their application domain, get more done, and perhaps save more money by not procuring the necessary infrastructure for self-hosted environment.
