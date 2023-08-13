If we look at this from the perspective of JS/TS, the following tools can be used for linting, testing and building.

a) Linting - ESLint is probably the most popular linter for JS/TS. It's highly customisable and has pre-built configs like airbnb's that enforce certain code styles and rules that can be very helpful when working in a team.
b) Testing - there are lots of options here. For unit testing some of the more common options are Jest and Mocha. For end-to-end testing Cypress is used as well as Playwright.
c) Building - building is less relevant for TS/JS than it is for other languages but in terms of transpiling TS into JS, the official TS compiler tsc can be used. For bundling - Webpack is probably the most popular but Vite has been gaining popularity as of late.

In terms of alternatives of Jenkins/GitHub Actions for CI - a quick google search shows that there are quite a few including Jira, GitLab CI/CD, Drone, CircleCI etc.

Taking into account the hypothetical dev team setup (small team of 6 people) - it probably makes sense to use a cloud-based environment. Configuration is simpler with less hassle and this would allow the team to focus on shipping their software quicker in a more agile manner. Once the team grows and the the app scales perhaps a self-hosted solution might make more sense as it offers more control and customisation to specific needs.
