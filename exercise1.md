The language I'm choosing for this hypothetical situation is Python. Python is a pretty popular, widely used programming language, so there are a lot of options for linters and testing tools but as Python is an interpreted language, I will skip build tools. 
Some of the linters I know and use are: Pylint, Flake8, MyPy and Ruff. These tools are usually used in conjunction with each other in some combination to enforce codestyle and type checking.

Some of the CI/CD alternatives for Jenkins and GH Actions include Travis CI, circleCI and Gitlab. Gitlab is the one I am most familiar with, and have used myself. Honestly, I don't see a much difference between Github and Gitlab, but the use cases have been pretty narrow so I don't know the full extent of capabilities of both of them. Both are pretty great.

When choosing between using a self-hosted or a cloud-based solution. I would look at the use case of our project and the size of it. The hassle of setting up a self-hosted solution and maintaining it might not be worth it against the opportunity cost of loss of man hours.
If there are sensitive data that needs to be kept in a self-hosted environment or you need to use custom pipelines and tools. A self-hosted might be the only choice.
