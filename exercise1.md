## Tools for CI in the ecosystem of Java:

- **Linting**: Checkstyle is one of the most popular linters available. It works natively with Ant and CLI. It is also available as a plugin for a wide variety of IDE’s and toolsets. (https://lightrun.com/java/top-10-java-linters/)

- **Testing**: JUnit is one of the popular Java unit testing frameworks. The unit test is used in a path function or for testing a small piece of code. It plays a vital role in test-driven development and is a part of the collective unit test frameworks called xUnit. JUnit boosts the initiative of “to begin with testing than coding,” which highlights setting up the testing data for a part of code that should be tested prior to execution. This technique is akin to the “test a little, code a little” technique. It enhances the programmer’s productivity and program code’s stability, which in turn reduces the pressure on the programmer and minimizes the time spent on debugging. (https://www.lambdatest.com/blog/9-of-the-best-java-testing-frameworks-for-2021/)

- **building**: Apache Maven is a powerful software project management tool used in the Java development environment to manage and build projects as well as to maintain dependencies. Maven uses an XML (pom.xml) for project configuration. (https://www.jrebel.com/blog/java-build-tools-comparison)

## Alternatives set up the CI besides Jenkins and GitHub Actions?

Buddy, TeamCity, Bamboo CI, GitLab CI, Codeship (https://xperti.io/blogs/continuous-integration-tools-java/)

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

It is better in a cloud-based environment, since we are a team of about 6 people buiing a small to medium application project, unless the project has some very special requirements, like a need for graphics card to run test.
