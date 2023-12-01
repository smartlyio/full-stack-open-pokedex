# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

### Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?
In python, for linting: "flake8" or "pylint". In testing, pytest or unittest. Building: "setuptools" or "wheel"

### What alternatives are there to set up the CI besides Jenkins and GitHub Actions? 
Buddy, a faster, simpler, and more reliable Jenkins alternative. Also others like: Azure pipelines, Bamboo by Atlassian, gitlab CI/CD.

### Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
Depends on the project and complexity, on a large and robust infrastructure, the more situable solution would be a self-hosted one. Otherwise,
for a more small, personal project, the less configuration the better, so, cloud-based solution. Also, even between languages, there's not seem
much difference on the linting, building and testing, just tools and probably some configuration, but the process concept may keep the same.
## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
