# Exercise 1: Python

## Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.

With Python for linting one can use flake8. It checks that the written code conforms to the standard Python coding style. If one would like that this checking is done each time new code is 
committed one could use a framework called per-commit with flake 8.For testing Python comes with a standard unit testing library. Although there are other libraries which can be used for 
testing, e.g pytest. For checking test coverage there is a tool called codecov. Python is a interpreted language so it's "build" mainly revolves around test execution rather than 
compilation.

## What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!

For Python there is an external CI service called CircleCI. It knows how to run a build and expects information to be supplied in a particular format. An open source CI tool example is 
Travis CI. With that one can also use ActiveState solution which makes the runtime environment perfectly reproducible on developer and production machines and on CI/CD as well. Then Travis 
CI will grab the source code etc. GitHub and the language runtime environment from ActiveState and then build and runs the tests for successful CI round.

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Six people working on a project doesn't necessarily need a self-hosted CI setup. Although the need for a certain setup depends on what kind of requirements the team or the project has
for the CI solution.

References: 
https://realpython.com/python-continuous-integration/
https://www.activestate.com/blog/how-to-build-a-ci-cd-pipeline-for-python/
https://www.earthdatascience.org/blog/unit-testing-linting-ci-python/