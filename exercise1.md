# FSO Part 11 Exercise 1

## Description of hypotethical project

Project is command line based small program written in Python and utilizing SQL database.

## CI tools

For linting typical choice for Python project is Pylint. Alternatively Flake8 is fairly common linting tool. Pylint and Flake8 can be configured to both Github Actions and Jenkins.

Testing consist on unit testing, integration testing and acceptance testing. Unit and integration testing don't always have very clear separation, but are partly mixed. A typical tool in for unit testing with Python is Pytest, but there are several alternatives such as Unittest.

Quite often testing is complemented with automated test coverage reporting, for which Coverage is typical Python tool.

Acceptance testing is also quite often automated, and with Python popular choice is Robot Framework.

All these mentioned testing tools can be used both with Github Actions and Jenkins.

As Python is interpreted language, a build step (as compile, linking etc process) is not needed as such. However, setting up the environment, e.g. running setup scripts, initializing database, etc. can be seen as build step in CI context.

## Alternative CI environments

In addition to Jenkins and GitHub Actions one could use GitLab CI or Travis CI.

## Environment

As the project is relatively small, CI should definitely be done in cloud-based environment. Self-hosted CI environments are expensive to setup, and further to that they are likely to require dedicated operations personnel to maintain environment.
