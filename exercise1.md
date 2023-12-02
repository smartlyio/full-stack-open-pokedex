Exercise 1

I have a team of 6 people developing and soon releasing an application. The team's main development language is Python. Our team needs a sure way to work on the project together without making a mess by deploying code that would interfere with other developers work.

We decide to go with the CI/CD method, that will automate processes before we push to our branches and do pull requests to main. We will need to lint, test and build our code before deployment.

Here are some tools we could use for:
  -Linting: Pylint: checks for not only style violations, but also for potential errors
  -Testing: Pytest: is a testing framework that makes it easy to write simple unit tests and other functional tests
  -Building: we are going with poetry, because setuptools is beginning to be outdated. Poetry will handle dependency management and packaging our project

Alternatives for CI besides Jenkins and GitHub:
  -Travis CI:
    A cloud-based CI service that integrates seamlessly with GitHub repositories.
    Supports a wide range of programming languages.
  -CircleCI:
    A cloud-based CI/CD platform that allows you to automate the software development process.
    Supports parallelism, caching, and Docker-based workflows.

    
Deciding between self-hosted and cloud-based environment:
  Our project is small scale, our build times are quite short and we only have 6 developers. We could of course buy our own server infrastructure and perform CI in-house, but at this level I would see cloud-based solutions the more appropriate way. Cloud-based solutions of course are not as powerful and if we would need GPU tests, what the cloud would have to offer would maybe not be sufficient. Our application CI can be operated with less power at this moment. We go with cloud-based solutions.