# Exercise 11.1

## The situation

We have an application being worked on by a team of about 6 people. The application is in active development and will be released soon. The application is coded with Python.

### Setup CI steps for the application

Tools for a back end application written in Python

- Framework: Django

- Linting: Django Doctor
  Django Doctor is a linter to help review Python code and prevent adding vulnerabilities. Therefore, codebase with Python will be more cleaner and maintainable.

- Testing: django.test.TestCase
  django.test.TestCase is a class build on Python to help test Python application.

-Building: Buildout
Buildout is the tool to build software written in Python. It helps apply software and templates to generate configuration files and scripts.

### Jenkins alternatives

TeamCity: a powerful continuous integration tool developed by Jet Brains team. This is a tool that allows the most flexibility for all sorts of workflows and development practices.

### Github Action alternatives

Gitlab CI/CD: developed from the competitor of Github, GitLab CI/CD helps build, test and deployment directly to its Git repos so they can be triggered on commitment.

### Setup types for the project

To decide whether use self-hosted or cloud-based server for the project, we need to consider some project's information such as the complexity, how the team want to control the infrastructure, and the amount of information the server need to process. If the team of 6 people simple just want a server where they can process CI/CD to make the application runs smoother and is always deployable, so they may just need a cloud-based environment. On the other hand, if the work volume is tremendous, and they may need more specific configurations in the future, so maybe they need a self-hosted server to meet their demands.
