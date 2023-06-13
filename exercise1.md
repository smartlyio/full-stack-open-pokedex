Python

For linting we have used Flake8. It allows our team to set certain rules as to how long lines can be, how complex can our functions be and it checks that names aren't absolutely awful (e.g. "r").
For backend testing we use Python unittest, it works just fine for pretty much all of our testing needs and other packages are added when needed. Our frontend (E2E) testing is done with Cypress.
We build our apps with Docker and Makefiles, if that counts. Our code consists of Python (Flask) and JavaScript and we package these main building blocks together along with some other containers by utilizing Docker-Compose. Makefiles allow us to not remember (possibly) complex arguments needed for certain commands to work.

Apparently there are lots of options to choose from when building a CI/CD-pipeline. Some of these tools are: Bitbucket Pipelines, AWS CodePipeline and CircleCI.

I believe that our use of Jenkins (self-hosted) is the correct choice. I do not have too much experience on configuring our CI/CD-pipelines but my understanding is that Jenkins allows us to very specifically run the tests that we need, e.g. Cypress with a separate MongoDB-container.