1. Using Python as an example:
- Linting: pylint is the most popular tool and includes both logical and stylistic checks. PEP8 is a common Python style guideline which can be verified by packages such as pycodestyle.
- Testing: the most popular testing frameworks include Robot framework and pytest. Python also includes some in-built packages such as unittest, which are used by pytest for example.
- Building: Python is an interpreted language so does not require a compiler. However, virtual environments and package managers are essential in any Python project. Examples include pip, venv, virtualenv, distutils etc.

2. Alternatives include Gitlab CI, Travis CI, TeamCity, CircleCI etc. Containerisation solutions like Docker and Kubernetes can be used to deploy production apps at scale. No shortage of CI/CD tools in 2021. 

3. Based on the small team size, it would be better in a cloud-based environment. Also considering the fact that the product is still in development, it makes more sense to switch to a self-hosted CI system later if/when scaling issues happen.