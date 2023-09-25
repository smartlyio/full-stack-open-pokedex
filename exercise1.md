Points to discuss:

- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Language of choice: Python

Tools required for:
- Linting: `pylint`, `flake8`, `black`, `pre-commit`
- Testing: `pytest` and `codecov`
- Building: [CircleCI](https://circleci.com/), [Travis-CI](https://www.travis-ci.com/)

Both CircleCI and Travis-CI connect to your GitHub account to connect to the repository, so are great options for cloud-based environments.

Resources:
- [Continuous Integration With Python: An Introduction](https://realpython.com/python-continuous-integration/)
- [How To Integrate Unit Testing, Linting, and Continuous Integration Into Your Python Projects](https://www.earthdatascience.org/blog/unit-testing-linting-ci-python/)