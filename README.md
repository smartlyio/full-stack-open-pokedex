# Getting node.js version 16

1. Search for nvm-windows
2. Download nvm-setup.exe
3. "Version xyz is already installed..." -> Yes
4. Install missing versions
> nvm install 16.20.2
5. and strat using them
> nvm use 16.20.2

Then do npm install

Is eslint does not work, try changing script eslint line to 

  "eslint": "eslint **/*.{js,jsx}",


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
