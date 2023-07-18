# Exercise 11.1

## 1) Tools for CI setup in the ecosystem of Python

Python has a rich ecosystem of tools that can be used to set up a Continuous Integration (CI) pipeline. Here are some of the most commonly used tools for linting, testing, and building:

### Linting: Pylint

This is a highly configurable tool that also checks for coding standards and has features like checking line-code's length, checking if variable names are well-formed according to your coding standard, and more.

### Testing: pytest

This is a powerful and flexible testing tool, which is often easier to use than unittest because it doesn't require as much boilerplate code. It supports both unit tests and more complex functional tests.

### Building: pip

This is the standard package manager for Python. It's used to install and manage Python packages from the Python Package Index (PyPI) and other indexes.

## 2) Alternatives of Jenkins and GitHub Actions

There are services like Travis CI and CircleCI, besides Jenkins and GitHub Actions.

## 3) Is the setup better in a self-hosted or a cloud-based environment? Why is that?

In the scenario described, a cloud-based CI/CD solution might be the most appropriate choice for several reasons:

### Ease of Setup

Cloud-based CI/CD solutions are typically easier and quicker to set up, which is beneficial for a team that's actively developing and planning to release soon.

### Maintenance

With a small team of 6 people, it's likely that we'd want to focus our resources on development rather than maintaining a CI/CD server.

### Cost

For a small team, the pay-as-you-go model of cloud-based solutions can be more cost-effective than investing in the hardware and maintenance required for a self-hosted solution.
