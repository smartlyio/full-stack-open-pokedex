For the purpose of this text I am assuming that the application is coded with Python.

**Common steps in CI: linting, testing and building**
For linting the Python application the tool I would use is Pylint. Pylint is a Python static code analysis tool that allows setting a minimum score for the linting runs. GitHub marketplace offers a simple Github action for Pylint to run linting.
For testing the tool I would use is Pytest. Pytest is an ecosystem with many features and plugins for testing Python code.
For building the Python application I would use GitHub Actions.

**Alternative CI tools to Jenkins and Github Actions**
One popular CI tool I found was CircleCi. It runs builds using a container or virtual machine and it can be integrated with GitHub. Another popular CI tool for a Python project I found was Travis CI. It is quick to setup and has live build views for GitHub projects monitoring. Some other alternatives I found are GitLab, Semaphore and Buddy.

**CI setup environment**
Since in this hypothetical situation the application is worked on by a team of 6 people, the application is presumably a small to medium project. Assuming that the project doesn't have any special requirements, a cloud-based environment would be a better setup. The configuration is simple and for smaller projects it is cheaper. 