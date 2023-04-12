# Python CI setup common steps

# Working environment

Since Python is not very good at dependency management, it’s a good practice among Python developers to use virtual environments for python projects. This will enable working and installing packages without affecting the system’s original installation.

# Unit testing

Python code is commonly tested in two phases. The first is by using a linter program for scanning potential mistakes. Flake8 is a common tool used for linting python code, in other words, double checking if the code adheres to the python coding standards.

The second phase is writing unit tests for individual functions or section of code. Python has several unit testing libraries such as PyTest, Robot and unittest.

In addition to testing, it’s a common practice among Python developers to calculate the percentage of source code that is covered by test (code coverage). PyTest extension PyTest-Cov is a useful tool for this task.

# Hosting platforms & setup tools

Besides Jenkins and Gitghub actions, threre are several alternatives that can be used to setup a CI in Python such as CircleCI, Travis CI, Team City and Bamboo.

Depending on the size and complexity of the project, a self-hosted or a cloud environment might be best for the CI setup. In self-hosted environments, the host is responsible for all software and hardware expenses, maintenance, and performance issues whereas in cloud environments, the cloud provider bears responsibility of all the complexity.

In conclusion, Cloud environments suit best smaller projects with smaller budgets while self-hosted environments suit best big projects with bigger requirements.
