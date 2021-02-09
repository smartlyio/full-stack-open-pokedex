The team is working on a new graphical frontend for the Folding at Home application, as the [current frontend](https://github.com/FoldingAtHome/fah-control) is ageing quickly. The application is developed in Python/PyQt5

A standard linter for Python code is [PyFlakes](https://github.com/PyCQA/pyflakes), which doesn't require much configuration. The code style, [PEP8](https://pep8.org/) compliant, can be enforced using [pycodestyle](https://github.com/PyCQA/pycodestyle). The application can be tested using [PyTest](https://docs.pytest.org/en/stable/getting-started.html) with the [pytest-qt](https://pypi.org/project/pytest-qt/) plugin, for unit and functional testing. The app doesn't require any build phase and needs only its dependencies to be installed on the system and available to the environment. The requirements are specified in a `setup.py` file. 

As for the CI/CD solutions the following were evaluated: Azure DevOps, Atlassian Bamboo, Atlassian's Bitbucket pipelines, Jetbrain Teamcity, Travis CI, Circle CI and GitLab. As the project is very lightweight and the code is open-source, Travis CI was chosen as it allows a simple configuration by including a `travis.yml` in the root of the project, and it's free for FOSS projects. Having a self hosted solution is not necessary at the moment, as the project is small and the CI solution is free for such scope.










