# CI/CD plan

Following is my plan to implement Continuous integration and continuous deployment pipeline for my web page hoopaugi.dev

The page is pretty simple: node app built using typescript and react, with limited backend functionality planned in the future for handling contact requests. This will most likely be built using node, typescript and express.

Project repository is stored in github, which makes choosing a platform for the CI/CD pipeline easy. The workflow is going to most likely consist of a few simple actions: on pull request to the main branch, lint the code with eslint and run the tests using jest. If the previous pass, build a production docker image and push it to docker hub. From there, the production image will be automatically deployed to AWS using watchtower.

This makes the development process simple and robust: make changes to the code, lint / test locally, create a pull request, review and approve the pull request. Local linting and testing is optional, but it will reduce the time wasted in a case of the same tests failing in the pipeline.

I should also set up some sort of monitoring and alerts for the production deployment: Incase something goes wrong and the website goes offline, or the traffic increases to apoint it's starting to reach the limits of the budget.
