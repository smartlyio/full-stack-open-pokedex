When handling important CI steps such as linting, testing, and building, most
programming languages have tools for these steps to handle these tasks. For
example, Python has a host of linters, with the most common being Pylint. For
testing, Pytest and Nose are more or less tied for first - although selenium can
also be used. Both are straightforward in the development and CI/CD process.
However, the build step is different compared to Javascript for example. Python
is an interpreted language, meaning it can be run without the need of a build
step. However, if one would want to release their Python app as a standalone
program, it would need to be packaged as an executable. Some tools for this task
include Pyinstall or Py2app.

A popular alternative to Jenkins and Github Actions is Buddy. It’s a cloud-based
CI/CD service that allows pipelines to be built for a wide host of languages and
frameworks. You can use it with Github, Gitlab, Bitbucket, your local Git
repositories, or if you don’t use version control then you can upload your code
straight to Buddy. Pipelines are extremely customizable and encompassed in an
easy-to-use UI.

As Python is an interpreted language with no need for a build step, web
applications built in Python likely wouldn’t warrant a self-hosted approach to
CI. Some limitations to consider would be the hosting provider and steps
required to deploy, as well as the size of the application. However, considering
the host of cloud-based hosting available, and the simple baseline for CI
pipelines for Python apps, cloud-based would be the safest and most
straightforward approach, at least to start with.
