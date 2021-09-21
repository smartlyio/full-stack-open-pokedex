Linting is usually done in pylint in python, but google also shows that there are other options such as Flake8, Pyright, Mypy and many more. Pylint is by far the oldest and most supported version, so that’s why it’s the preferred choice. For testing, the most popular options seem to be Pytest and Robot. Pytest is used for unit testing, which means it tests a section of an application, and Robot is used for acceptance testing, which means it is basically the final stage of the application. Building in python is done automatically, so there’s actually no need to do it like in javascript.

When it comes to CI tools besides Jenkins, there are a lot of options such as GitLab, CircleCI TeamCity, TravisCI and the list goes on. There are so many options that it makes me wonder what is the actual difference between all these tools. It would be wise to use the most supported tools.

Since the team has only 6 people I would say GitHub is the better option. It is easier to set up and there’s really no need for the flexibility that Jenkins offers. If the team expands or the build is getting too big, it would be a smart move to switch over to Jenkins.


