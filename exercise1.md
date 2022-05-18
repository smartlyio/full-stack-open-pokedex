## Exercise 11.1

For sake of simplicity, I'm assuming the imaginary application is a singular (monolithic) service
without a user interface, providing only an API for use by other applications. Let's say it is
written in Java, probably utilizing the [Spring framework](https://spring.io/) or similar.

As for CI/CD-related tooling, I'd imagine that:
- Build and dependencies would be handled with [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/).
  I'm not sure if there are other feasible candidates? Out of the two, popular opinion seems to be
  tilted in favor of Gradle...? E.g. Spring Boot [ditched Maven for Gradle](https://spring.io/blog/2020/06/08/migrating-spring-boot-s-build-to-gradle)
  a couple of years ago.
- Testing would encompass such tools as [JUnit Jupiter](https://junit.org/junit5/) and [Mockito](https://site.mockito.org/)
  for unit tests, maybe also adding [Cucumber](https://cucumber.io/) and/or [REST-assured](https://rest-assured.io/)
  for integration tests. Given the assumptions above, there probably is no need for E2E testing
  with e.g. [Robot Framework](https://robotframework.org/).
- Linting could be done with [SonarLint](https://www.sonarlint.org/) (IDE) and [SonarQube](https://www.sonarqube.org/)
  (pull requests etc.), though neither is exclusive to Java.
- Regardless of where and how the application is deployed, [Docker](https://www.docker.com/) would
  likely also be involved. Someone somewhere certainly will want to build and run the application in
  a container. Docker would also allow utilizing [Testcontainers](https://www.testcontainers.org/)
  in testing.

I'm thinking this kind of small and limited setup would do fine on any cloud platform. All involved
CI/CD scenarios should be run-of-the-mill. Moreover, you wouldn't have to go looking for masochists
who derive a strange pleasure from the dark arts of Jenkins, Nginx & co. The entire team, small as
it is, could just focus on the actual product instead of "distribution" minutiae.

Some alternatives to GitHub Actions that I've heard of, or have cursorily tried myself, include
[CircleCI](https://circleci.com/) and [Travis](https://travis-ci.org/). I've never even touched AWS
or Azure, but I'd imagine both offer relevant tools as well.
