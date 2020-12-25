# CI setup options for developing applications in the Python ecosystem
## Linting, testing, and building
* **Linting**: [Flake8](https://flake8.pycqa.org/en/latest/) is a fast code linter that also has a low rate of false positives. Flake8 is actually a combination of several other tools, mainly the [Pyflakes](https://pypi.org/project/pyflakes/) static analysis tool and the [Pycodestyle](https://pypi.org/project/pycodestyle/) code style checker.
* **Testing**: [Pytest](https://docs.pytest.org/en/stable/) is one of the most widely used Python testing frameworks. It supports unit testing, functional testing, and API testing. Requires Python 3.5 or higher.
* **Building**: [PyBuilder](https://pybuilder.io/) is a software build automation tool written in pure Python, based on the concept of dependency-based programming and features a powerful plugin mechanism that allows the construction of build life-cycles.

## CI alternatives to Jenkins and GitHub Actions
* [Travis-CI](https://www.travis-ci.com/) is a distributed CI server which builds tests for open source projects for free. It provides multiple workers to run Python tests on and seamlessly integrates with GitHub.
* [Tox](https://tox.readthedocs.io/en/latest/) is an automation tool providing packaging, testing, and deployment of Python software right from the console or CI server. It is a generic virtualenv management and test command line tool.

## Cloud-based or self-hosted?
We have opted to use a cloud-based CI solution for our software project for the following reasons:
* The project is medium-sized
* It does not require any special hardware
* Standard use cases for testing that do not require any complicated setup or configuration