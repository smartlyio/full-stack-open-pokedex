# Discussing CD/CI in a RoR (ruby on rails) + React project

The tools that would be used in the development of our new Tinder web application would be as follows:
- For version management git + GitHub (because of its popularity)
- For the backend (ruby on rails), we would use rufo, which is a commonly used VS code extension for RoR development, which handles RoR code formatting, and with which we would do our linting.  
- For tests, we would use rspec, which is a library with a similar syntax to Jest.
- For frontend, we would use Jest for testing, eslint for linting, and a custom webpack config for building the frontend into a ‘./build’ directory.
- In addition to this, we would use docker to containerize our code.

A commonly used CI libaries for RoR projects, besides Jenkins, are Bamboo and Codeship. But because of its popularity, the best of these self-hosted solutions is Jenkins. 

In our project, we would most likely adopt GitHub actions, because we would most likely be using GitHub as a development environment, so the integration would be easy. Also, for a small company with relatively small projects = small tests, GitHub actions is the most affordable choise.