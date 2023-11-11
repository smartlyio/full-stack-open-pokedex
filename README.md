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

## Deployment with render.com

A webook is used to trigger a render deployment - Render dashboard includes the webhook address (used as ID) and an API key, `https://api.render.com/deploy/srv-${{ secrets.ID }}?key=${{ secrets.API_KEY }}`
Full stack open exercise documentation suggests an API key needs to be generated from settings, but this appears to now be incorrect as the webhook url listed on the Render settings includes a key in the url,
so it appears the these secrets do not need to be stored in the Render Secrets, only in the Github Secrets (so that the webhook request can be made)

Github secrets (for pipeline action file) are set in repository > settings > secrets & variables > actions

NOTE: Render.com documentation just suggests pasting the whole webhook url as a github secret rather than `https://api.render.com/deploy/srv-${{ secrets.DEPLOY_HOOK }}` etc. so I have followed their example

### Checking deploy only runs on pushing / merging (PR) to master

Adding comments here and commiting to pr-example branch to confirm that the deployment step does not run: `if: ${{ github.event_name == 'push' }}` - this ensures the deploy step is only run on the merging.
Currently there is no action showing so this may be set up correctly now.

