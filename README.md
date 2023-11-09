# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## NOTES

Had to set the eslint command in package.json to use escapes double quotes instead of single `\"` otherwise it wouldn't detect any files for the pattern.

Also needed to add `--fix` to the eslint command otherwise it wouldn't actually fix the errors??

Also needed to set `no-console: 'off'` in eslintrc to get rid of the console warning
