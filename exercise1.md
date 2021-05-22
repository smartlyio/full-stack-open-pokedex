### Some common steps in a CI setup include liniting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?
Let's say we have a Python ML project that worked by 6 team members.
- linting: **flake8** is commonly used to check if your code conforms to the standard Python coding style. 
- testing: **pytest** will be a suitable tool to conduct unit tests in python developing environment. Besides, **pytest-cov** can serve as a tool to give you the insight into code coverage.
- building: **CircleCI** maintains pre-built Docker images for different programming languages. We can create a yml file as the example below:

```yml
# Python CircleCI 2.0 configuration file
version: 2
jobs:
  build:
    docker:
      - image: circleci/python:3.7

    working_directory: ~/repo

    steps:
      # Step 1: obtain repo from GitHub
      - checkout
      # Step 2: create virtual env and install dependencies
      - run:
          name: install dependencies
          command: |
            python3 -m venv venv
            . venv/bin/activate
            pip install -r requirements.txt
      # Step 3: run linter and tests
      - run:
          name: run tests
          command: |
            . venv/bin/activate
            flake8 --exclude=venv* --statistics
            pytest -v --cov=calculator
```
Along with **docker**, we will be able to build the project based on the yml file.

### What alternatives are there to set up the CI besides Jenkins and Github Actions?

TravisCI, CodeShip, Semaphore, AWS CodePipeline, Microsoft Team Foundation Server, Hudson.


### Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

The time and money budgets are the main input for deciding if a team will go with Self-hosted CI/CD or Cloud-based CI/CD solutions. 

In the Self-hosted one. The works include:

- Implementing and customizing settings
- Hardware and other maintenance
- Hiring and IT personnel needs
- Performance tuning
- Upgrading network/database
- Downtime
- Fixing issues

In the Cloud-based counterpart. The works includes:
- Migration the new platform and customizing settings
- Initial learning phase for the tools and frameworks

So based on the factors mentioned above. If the project only worked by 6 team members. A cloud-based solution will be more suitable since it simply handles lots of tedious tasks for us.
