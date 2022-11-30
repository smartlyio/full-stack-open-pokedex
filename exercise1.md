I chose Python for this exercise, because I have studied that few courses.
For version control I would use GitHub for this kind of project.
For linting and formatting Python there are few tools like pycodestyle, pylint, pyflakes, flake8, black, autopep8 and yapf.
Continuous Integration (CI) is a development practice which automates the build and testing process of the code. Continuous Integration automates the build and testing processes. There are alternatives to GitHub Actions like gitlab-ci, CircleCI, Travis CI and Azure Pipelines etc.
Python is an interpreted language, which means that there is no compilation of code required to run it so it means that building step is not needed.

CI/CD systems require resources to run and, as with any infrastructure, this means that someone has to maintain the health of the services and the underlying host systems. Your organization’s time, money, and values will usually determine which solution best fits your goals in this category.

In this kind of team six developers it would be easier and cheaper to use some cloud based CI/CD solution (like GitHub).

In my workplace (Helsinki City) smaller teams who are making eg. web applications, they are usually using Github. When the app is ready and tested they are put in Azure or AWS cloud.
