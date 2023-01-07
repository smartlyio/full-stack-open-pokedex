## Linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? 
For a Java project, there are quite many tools available for linting, such as [checkstyle](https://checkstyle.sourceforge.io/config_design.html), [Lightrun](https://lightrun.com/) and [PMD](https://pmd.github.io/#about). Popular testing frameworks include [JUnit](https://junit.org/), [TestNG](https://testng.org/doc/), and [Mockito](https://site.mockito.org/). Building can be done with [Gradle](https://gradle.org/), [Maven](https://maven.apache.org/), or [CMake](https://cmake.org/).

## What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
Other options for CI can be [Travis CI](https://www.travis-ci.com/), [GitLab CI/CD](https://docs.gitlab.com/ee/ci/), [CircleCI](https://circleci.com/).

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
All the above-mentioned alternatives for CI can be run on self-hosted servers and cloud-based environment. Which option is better depends on many factors, such as project budget, resources available, the size of the application and its developer teams, as well as CI team's expertise and preference.