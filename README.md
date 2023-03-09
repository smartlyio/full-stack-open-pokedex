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

## # Exercise 11.1.
**Task:**
Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.

The points to discuss:
- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

The answer is provided in the [exercise1.md](./exercise1.md) file.

## 11.2 The example project
**Task:**
The first thing you'll want to do is to fork the example repository under your name. What it essentially does is it creates a copy of the repository under your GitHub user profile for your use.

To fork the repository, you can click on the Fork button in the top-right area of the repository view next to the Star button:

Once you've clicked on the Fork button, GitHub will start the creation of a new repository called {github_username}/full-stack-open-pokedex.

Once the process has been finished, you should be redirected to your brand new repository:

Clone the project now to your machine. As always, when starting with a new code, the most obvious place to look first is the file package.json

Try now the following:

- install dependencies (by running `npm install`)
- start the code in development mode
- run tests
- lint the code
You might notice that project contains some broken tests and linting errors. Just leave them as they are for now. We will get around those later in the exercises.

As you might remember from [part 3](https://fullstackopen.com/en/part3/deploying_app_to_internet#frontend-production-build), the React code should not be run in development mode once it is deployed in production. Try now the following

- create a production build of the project
- run the production version locally
Also for these two tasks, there are ready-made npm scripts in the project!

Study the structure of the project for a while. As you notice both the frontend and the backend code is now [in the same repository](https://fullstackopen.com/en/part7/class_components_miscellaneous#frontend-and-backend-in-the-same-repository). In earlier parts of the course we had a separate repository for both, but having those in the same repository makes things much simpler when setting up a CI environment.

In contrast to most projects in this course, the frontend code does not use create-react-app, but it has a relatively simple [webpack](https://fullstackopen.com/en/part7/webpack) configuration that takes care of creating the development environment and creating the production bundle.

**Solution:**

*Note:* I decided to choose different name of the repository than instructed in the materials to ensure the consistency in naming repositories for different parts of this course.
The production build did not work when running the predifined scripts:

```
% npm run start-prod                             

> fullstackopen-cicd@1.0.0 start-prod
> node app.js

node:events:491
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::5000
    at Server.setupListenHandle [as _listen2] (node:net:1432:16)
    at listenInCluster (node:net:1480:12)
    at Server.listen (node:net:1568:7)
    at Function.listen (/Users/rohal/projects/fullstackopen/fullstackopen-part11/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/rohal/projects/fullstackopen/fullstackopen-part11/app.js:9:5)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1459:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 5000
}
```

## Exercise 11.3 Hello world!
**Task:**
Create a new Workflow which outputs "Hello World!" to the user. For the setup, you should create the directory .github/workflowsand a file hello.ymlto your repository.

To see what your GitHub Action workflow has done, you can navigate to the Actions tab in GitHub where you should see the workflows in your repository and the steps they implement. The output of your Hello World workflow should look something like this with a properly configured workflow.

You should see the "Hello World!" message as an output. If that's the case then you have successfully gone through all the necessary steps. You have your first GitHub Actions workflow active!

Note that GitHub Actions also informs you on the exact environment (operating system, and its setup) where your workflow is run. This is important since if something surprising happens, it makes debugging so much easier if you can reproduce all the steps in your machine!

**Solution:**
The task was completed as instructed.

## Exercise 11.4 Date and directory contents
**Task:**
Extend the workflow with steps that print the date and current directory content in long format.

Both of these are easy steps, and just running commands [date](https://man7.org/linux/man-pages/man1/date.1.html) and [ls](https://man7.org/linux/man-pages/man1/ls.1.html) will do the trick.

As the output of command `ls -l` shows, by default, the virtual environment that runs our workflow does not have any code!

**Solution:**
The task was completed as instructed.

## Exercise 11.5 Linting workflow
**Task:**
Implement or copy-paste the "Lint" workflow and commit it to the repository. Use a new yml file for this workflow, you may call it e.g. pipeline.yml.

Push your code and navigate to "Actions" tab and click on your newly created workflow on the left. You should see that the workflow run has failed.

**Solution:**
The task was completed as instructed.

## Exercise 11.6 Fix the code
**Task:**
There are some issues with the code that you will need to fix. Open up the workflow logs and investigate what is wrong.

A couple of hints. One of the errors is best to be fixed by specifying proper env for linting, see [here](https://fullstackopen.com/en/part3/validation_and_es_lint#lint) how it can be done . One of the complaints concerning console.logstatement could be taken care of by simply silencing the rule for that specific line. Ask google how to do it.

Make the necessary changes to the source code so that the lint workflow passes. Once you commit new code the workflow will run again and you will see updated output where all is green again.

**Solution:**
The linting problems were fixed as instructed.

## Exercise 11.7 Building and testing
**Task:**
Let's expand on the previous workflow that currently does the linting of the code. Edit the workflow and similarly to the lint command add commands for build and test.

**Solution:**
The task was completed as instructed.

## Exercise 11.8 Back to green
**Task:**
Investigate which test fails and fix the issue in the code (do not change the tests).

Once you have fixed all the issues and the Pokedex is bug-free, the workflow run will succeed and show green!

**Solution:**
Pokemon page links were fixed in the code.

## Exercise 11.9 Simple end to end -tests
**Task:**
The current set of tests use Jest to ensure that the React components work as intended. This is exactly the same thing that is done in section [Testing React apps](https://fullstackopen.com/en/part5/testing_react_apps) of part 5.

Testing components in isolation is quite useful but that still does not ensure that the system as a whole works as we wish. To have more confidence about this, let us write a couple of really simple end to end -tests with the Cypress library similarly what we do in section [End to end testing](https://fullstackopen.com/en/part5/end_to_end_testing) of part 5.

So, setup Cypress (you'll find [here](https://fullstackopen.com/en/part5/end_to_end_testing/) all info you need) and use this test at first:
```
describe('Pokedex', function() {
it('front page can be opened', function() {
cy.visit('http://localhost:5000')
cy.contains('ivysaur')
cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
})
})
```
Define a npm script `test:e2e` for running the e2e tests from the command line.

Note do not include the word spec in the Cypress test file name, that would cause also Jest to run it, and it might cause problems.

Note2 end to end tests are pretty slow and than can cause problems when run with the GitHub Actions. Slowness can be remedied by changing App.jsx to fetch a bit less Pokemons, eg. 50 works fine:
```
const {
data: pokemonList, error, isLoading
} = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50', mapResults)
```
The same change must be done in the test file App.jest.spec.jsx

The change is now (16th September 2022) done in the repository, but if you have fetched the code earlier, there might still be a bigger number.

Another thing to note is that despite the page renders the Pokemon names by starting with a capital letter, the names are actually written with lower case letters in the source, so it is ivysaurinstead of Ivysaur!

Ensure that the test passes locally. Remember that the Cypress tests assume that the application is up and running when you run the test! If you have forgotten the details (that happened to me too!), please see [part 5](https://fullstackopen.com/en/part5/end_to_end_testing) how to get up and running with Cypress.

Once the end to end test works in your machine, include it in the GitHub Action workflow. By far the easiest way to do that is to use the ready-made action [cypress-io/github-action](https://github.com/cypress-io/github-action). The step that suits us is the following:
```
- name: e2e tests
  uses: cypress-io/github-action@v2
  with:
  command: npm run test:e2e
  start: npm run start-prod
  wait-on: http://localhost:5000
  Three options are used. command specifies how to run Cypress tests. start gives npm script that starts the server and wait-on says that before the tests are run, the server should have started in url http://localhost:5000.
```
If you are using Cypress 10.X, you may need to revise the steps as follows:
```
- name: e2e tests
  uses: cypress-io/github-action@v4
  with:
  build: npm run build
  start: npm run start-prod
  wait-on: http://localhost:5000
  Once you are sure that the pipeline works, write another test that ensures that one can navigate from the main page to the page of a particular Pokemon, e.g. ivysaur. The test does not need to be a complex one, just check that when you navigate a link, the page has some right content, such as the string chlorophyll in the case of ivysaur.
```
Note also the Pokemon abilities are written with lower case letters, the capitalization is done in CSS, so do not search eg. for Chlorophyll but chlorophyll.

Note2 that you should not try bulbasaur, for some reason the page of that particular Pokemon does not work properly...

End to end -tests are nice since they give us confidence that software works from the end user's perspective. The price we have to pay is the slower feedback time. Now executing the whole workflow takes quite much longer.

**Solution:**
The task was done as instructed.

## Exercises 11.10-11.12. (Fly.io)
Before going to the below exercises, you should setup your application in Fly.io hosting service like the one we did in [part 3](https://fullstackopen.com/en/part3/deploying_app_to_internet#application-to-the-internet).

If you rather want to use Heroku, there is an alternative set of exercises for that.

In contrast to part 3 now we do not deploy the code to Fly.io ourselves (with the command flyctl deploy), we let the GitHub Actions workflow do that for us!

Create a new app in Fly.io and after that generate a Fly.io API token with command
```
flyctl auth token
```
You'll need the token soon for your deployment workflow!

Before setting up the deployment pipeline let us ensure that a manual deployment with the command flyctl deploy works.

You most likely need to do at least two changes. Firstly, define the Node version to use in the file package.json to match one used in your machine. For me it is 16.13.2:
```
{
"engines" : {
"node" : "16.13.2"
},
"name": "fullstackopen-cicd",
"version": "1.0.0",
"description": "Full Stack Open",
// ...
}
```
The configuration file fly.toml should also be modified to include the following:
```
[deploy]
release_command = "npm run build"

[processes]
app = "node app.js"
```
The release_command under [deploy](https://fly.io/docs/reference/configuration/) now ensures that the production built will be done before starting up the app. In [processes](https://fly.io/docs/reference/configuration/#the-processes-section) we define the command that starts the application. Without these changes Fly.io just starts the React dev server and that causes it to shut down since the app itself does not start up.

Here the app refers to the application process that is started up in the [services](https://fly.io/docs/reference/configuration/#the-services-sections) section:
```
[[services]]
http_checks = []
internal_port = 8080
processes = ["app"]  // highlight-line
```

**Solution:**
I had to check different discussion forums, discord channels and other solutions to configure deployment to fly. There seemed to be a significant changes since I worked with fly.io last time.

## Exercise 11.10 Deploying your application to Fly.io
**Task:**
Before starting this exercise, make sure that the manual deployment with the command flyctl deploy works!

Extend the workflow with a step to deploy your application to Fly.io by following the advice given [here](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/).

You need the authorization token that you just created for the deployment. The proper way to pass it's value to GitHub Actions is to use repository secrets.

Now the workflow can access the token value as follows:
```
${{secrets.FLY_API_TOKEN}}
```
You can then try the app with a browser, but most likely you run into a problem. If we read carefully the section ['Application to the Internet' in part 3](https://fullstackopen.com/en/part3/deploying_app_to_internet#application-to-the-internet)

Remember that it is always essential to keep an eye on what is happening in server logs when playing around with product deployments, so use flyctl logsearly and use it often. No, use it all the time!

**Solution:**
Configured as instructed, after merge to master app deployed without any errors in logs.

## Exercise 11.11 Health check and rollback
**Task:**
Each deployment in Fly.io creates a [release](https://fly.io/docs/flyctl/releases/). Releases can be checked from the command line:
```
$ flyctl releases
VERSION	STABLE	TYPE    	STATUS   	DESCRIPTION            	USER           	DATE
v13    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	30m6s ago
v12    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	51m30s ago
v11    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	59m25s ago
v10    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	1h6m ago
```
It is essential to ensure that a deployment ends up to a succeeding release, where the app is in healthy functional state. Fortunately Fly.io has several configuration options that take care of the application health check.

The default fly.toml has already a section [services.tcp_checks](https://fly.io/docs/reference/configuration/#services-tcp_checks)
```
[[services.tcp_checks]]
grace_period = "1s"
interval = "15s"
restart_limit = 0
timeout = "2s"
```
This section defines a basic health check of the deployment. The TCP check ensures that the virtual machine where the app resides is up and running and reachable from outside, by opening a TCP connection to the virtual machine.

This check notices if something is fundamentally broken in the configurations. E.g. in my case for the app of this part, it took several trials until I got the app up and running:
```
$ fly releases
VERSION	STABLE	TYPE    	STATUS   	DESCRIPTION            	USER           	DATE
v4     	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	5h39m ago
v3     	false 	release 	failed   	Deploy image           	mluukkai@iki.fi	5h50m ago
v2     	false 	release 	failed   	Deploy image           	mluukkai@iki.fi	5h57m ago
v1     	false 	release 	failed   	Deploy image           	mluukkai@iki.fi	6h12m ago
v0     	false 	release 	failed   	Deploy image           	mluukkai@iki.fi	6h19m ago
```
So finally in the 5th deployment (version v4) I got the configuration right and that ended in a succeeding release.

Besides the rudimentary TCP health check, it is extremely beneficial to have also some "application level" health checks that ensure that the app for real is in functional state. One possibility for this is a HTTP-level check defined in section [services.http_checks](https://fly.io/docs/reference/configuration/#services-tcp_checks) that can be used to ensure that the app is responding to the HTTP requests.

Add a simple endpoint for doing an application health check to the backend. You may e.g. copy this code:
```
app.get('/health', (req, res) => {
res.send('ok')
})
```
Configure then a [HTTP-check](https://fly.io/docs/reference/configuration/#services-http_checks) that ensures the health of the depyments based on the HTTP request to the defined health check endpoint.

Note that the default fly.toml has defined that http_checks is an empty array. You need to remove this line when you are adding a manually defined HTTP-check:
```
[[services]]
http_checks = []
```
It might also be a good idea to have a dummy endpoint in the app that makes it possible to do some code changes and to ensure that the deployed version has really changed:
```
app.get('/version', (req, res) => {
res.send('1') // change this string to ensure a new version deployed
})
```
Ensure that Actions notices if a deployment breaks your application:

fullstack content
You may simulate this e.g. as follows:
```
app.get('/health', (req, res) => {
throw 'error...'
// eslint-disable-next-line no-unreachable
res.send('ok')
})
```
As can be seen in the command line, when a deployment fails, Fly.io rolls back to the previous working release:
```
$ fly releases
VERSION	STABLE	TYPE    	STATUS   	DESCRIPTION            	USER           	DATE
v15    	true  	rollback	succeeded	Reverting to version 13	               	16m48s ago
v14    	false 	release 	failed   	Deploy image           	mluukkai@iki.fi	21m53s ago
v13    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	30m6s ago
v12    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	51m30s ago
v11    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	59m25s ago
v10    	true  	release 	succeeded	Deploy image           	mluukkai@iki.fi	1h6m ago
```
So despite the problems in the relese, the app stays functional!

Before moving to next exercise, fix your deployment and ensure that the application works again as intended.

**Solution:**
Configured and tested as instructed.