# Full Stack open CI/CD

This repository is used for the CI/CD module of the [Full stack open course](https://github.com/ndeamador/FullStackOpen2020)

* **May 2021 edit**: application containerized for exercise 3.1 in the [**Devops with Docker**](https://devopswithdocker.com/part3/) course by the **University of Helsinki**

---

The main parts of the **GitHub Actions** pipeline are:

- Creating Virtual Machine and installing dependencies.
- Linting with ESLint.
- Creating a production build.
- Testing with Jest and Cypress.
- Deployment to Heroku ([https://ndeamador-fso2020-pokedex.herokuapp.com/](https://ndeamador-fso2020-pokedex.herokuapp.com/)), including healthcheck and rollback of check fails.
- Sending automated GitHub notifications to third-party messaging application ([Slack](https://slack.com/intl/en-gb/)).
- Versioning.

---

## Commands

Start by running `npm install` inside the project folder

- `npm start` to run the webpack dev server
- `npm test` to run tests
- `npm run eslint` to run eslint
- `npm run build` to make a production build
- `npm run start-prod` to run your production build
