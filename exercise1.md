I will assume that the hypothetical application will be written on python.

1. Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?
- linting: flake8, black, pre-commit, bandit
- testing: pytest, codecov
- building: PyBuilder, pynt, microbuild

2. What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
Jenkins is an open-source automation tool, a self-hosted option.
The alternative self-hosted options are: Buildbot, Go CD

GitHub Actions - is an option for a cloud-hosted setup.
The alternative cloud-hosted options are: Semaphore, Travis-CI, CircleCI

3. Would this setup be better in a self-hosted or a cloud-based environment? Why?
Group of six developers means a small to medium software project with less probabilities of a need to make a specific complex CI configuration and without any special requirements (like, need of a graphics card for tests). The configuration for such a project must be simple. Besides (what is also important for small projects: cloud-hosted services are often cheaper, that self-hosted ones).
Knowing that the application is already in active development stage and will be released soon, using cloud-based CI will work without additional stress.
So the decision is: cloud-based environment.