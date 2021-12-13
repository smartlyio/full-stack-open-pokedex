# Exercise 11.1

For this exercise I chose Python as my (or our teams?) language. Google helped me to find [pylint](https://pylint.org/) as a linting tool for Python. For Unit-tests I've used [Pytest](https://pytest.org/) and I've found it a nice tool, so I guess this team could use it aswell. The team can use `pytest-mock` with Pytest as a mocker, to give Api-functionality where needed in order to run Unit-tests. [Coverage](https://pypi.org/project/coverage/) gives a nice tool to measure the coverage of unit-tests. 
I don't really know what to say about building-tools, since Python is interpreted language. 

For CI-tools I managed to find [CircleCI](https://circleci.com/). It's a cloud based tool and I've set up a pipeline using it once during a DevOps with Docker -course. I can't really tell if it can provide much extra functionality for a team of six over Github Actions. 

If an self hosted solution is preferred, the team might want to take a look at [Concourse](https://concourse-ci.org/). I can't really tell much about the tool, since I have no experience from using it. However, since the team is only 6 members, I guess I would go for an cloud hosted solution that is quick to setup and can be managed by any of the team members. Using one team member to setup a self hosted solution takes a big propotion of the teams resources and might make it more vulnerable for changes in the staff. 

