-- Exercise1 added to this repository ---

I'll take a look at the JavaScript/TypeScript, Node.js ecosystem in this exercise.

- Tools for taking care of common CI steps (linting, testing, and building.)

Tools for linting that are familiar to me from Parts 0-7 are e.g. ESLint and Prettier. 
Prettier can automatically take care of code formatting if the team of 6 developers like to keep a consistent and shared code formatting.
ESLint should be used to catch bugs or in the case of e.g. TypeScript, warn the developers of using dangerous patterns like implicit any.

For testing, Jest is obviously worth a mention, helping with unit and integration tests. Cypress was used in Part 5 of the course, and it was pitted against its harder to use cousin, Selenium, for end-to-end testing. 

For building, it was mentioned that Webpack is the current de facto building tool for building JS/TS code to production ready state.

- Alternatives to Jenkins and GitHub Actions

TeamCity by Jetbrains. The product has three levels of Cloud, Professional and Enterprise. Professional is the self-hosted one, similar to Jenkins, where you need to have it running on your own server. 

TravisCI. Not an open-source like Jenkins, rather a paid product. Not a self hosted on, so it works on the cloud operating with hosting services like GitHub.

GitLab, the competitor to GitHub, offers similarly their own CI/CD solution; the GitLab CI/CD.

- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

This depends on the e.g. build times of the time. If the cloud based CI/CD solutions are priced based on build times, then with long running build taks it might make sense to invest in dedicated servers running self-hosted CI/CD software as it can relatively quickly pay back for itself.

Another aspect discussed in the course material was the fact that cloud based CI/CD solutions might be capped in terms of hardware, whereas with a server the team owns, they can throw in a better CPU, more and faster RAM to make the pipelines complete faster and build times shorter.

Skill level of the team and its familiarity with CI/CD principles and practices should also be considered. If the team is quite new to it, for example a startup consisting of CS students, starting out with a relatively more straight forward cloud based CI/CD solution might be better.