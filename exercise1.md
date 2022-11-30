# CI setup options for developing applications in the Python ecosystem
## Linting, testing, and building
* **Linting**: [Flake8](https://flake8.pycqa.org/en/latest/) is a fast code linter that also has a low rate of false positives. Flake8 is actually a combination of several other tools, mainly the [Pyflakes](https://pypi.org/project/pyflakes/) static analysis tool and the [Pycodestyle](https://pypi.org/project/pycodestyle/) code style checker.
* **Testing**: [Pytest](https://docs.pytest.org/en/stable/) is one of the most widely used Python testing frameworks. It supports unit testing, functional testing, and API testing. Requires Python 3.5 or higher.
* **Building**: [PyBuilder](https://pybuilder.io/) is a software build automation tool written in pure Python, based on the concept of dependency-based programming and features a powerful plugin mechanism that allows the construction of build life-cycles.

## CI alternatives to Jenkins and GitHub Actions
* CloudBees Core started with Jenkins, the well-known open source project for continuous integration, then added testing, support, and some assurance that the code will just run.
* AWS CodePipeline Amazon’s tool for continuous integration and deployment, AWS CodePipeline, is optimized for delivering code to an AWS server while still being open to more elaborate pathways for your code and data.
* Bitbucket PipelinesAtlassian, the developers of the popular job tracking board, Jira, and code repository, Bitbucket, decided to leverage their hold on our workflow by creating Bitbucket Pipelines, a continuous integration tool in the Bitbucket cloud.
## Cloud-based or self-hosted?
We have opted to use a cloud-based CI solution for our software project for the following reasons:
* The project is medium-sized
* It does not require any special hardware
* Standard use cases for testing that do not require any complicated setup or configuration