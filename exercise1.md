CI in Python
reference: https://realpython.com/python-continuous-integration/

The CI setup in Python is fairly standard with several widely adopted options for the most common needs
due to the popularity of the language. Several linting options such as flake8 and pylint exist to catch
errors during the actual process of writing the code. Testing libraries include pytest complemented with
the extension pytest-cov which calculates the "code coverage" of your tests. It is recommended to avoid local build
tools with Python if not necessary. The site referenced above recommends a Docker based setup, where a service
called CircleCI is used for building the CI pipeline based on a requirements.txt file.

There exist many alternatives to Jenkins and Github actions, these include but are not limited to to the open
source tool Gitlab which for example has been adopted by the University I study in, the above mentioned CircleCI and AWS
CodePipeline.

I think it would be hard to argue against cloud-based enviroments, and unless a project requires a very high level
of customization and intricate implementation then a cloud-based enviroment is certainly a more straightforward approach, and
most likely cheaper. Personally I welcome cloud-based solutions with open arms as allows the focus to be on the project
rather than the configuration and would avoid self-hosted solutions unless they are absolutely necessary.
