# CI for Java
## Lint, test, build!
### Linting
For linting I decided to go with [Checkstyle](https://checkstyle.sourceforge.io/) because it's widely used, has good integrations/plugins for different IDEs and is easy to set up because there are lots of pre-made configurations to choose from. Its configuration is made in XML which is pretty different from ESLINT's JSON, but still pretty readable and writeable.
### Testing
For testing I chose [Junit 5](https://junit.org/junit5/). I already have experience with this tool and it is simple enough and just works. It is highly popular and has great documentation and examples, [such as this one](https://github.com/junit-team/junit5-samples/tree/r5.9.0/junit5-jupiter-starter-maven) which is suitable as a base for this project.
### Building
For Java, there are three major building tools: Ant, Maven and Gradle. There are advantages and disadvantages for all of them, but for this project I'd go with [Apache Maven](https://maven.apache.org/) mainly because it makes handling dependencies easily and I already know that it works well since I have used it in the past.
<br><br>

## Alternatives to Github Actions and Jenkins
Although Github Actions and Jenkins are popular options, others include e.g.
- [Amazon Web Services](https://aws.amazon.com/getting-started/hands-on/set-up-ci-cd-pipeline/)
- [TeamCity by JetBrains](https://www.jetbrains.com/teamcity/)
- [GitLab CI](https://docs.gitlab.com/ee/ci/) and
- [Buddy](https://buddy.works/)
<br><br>

## Cloud or self-hosted?
I'd go with Github Actions in the cloud. The lint/test/build tools I chose already have many pre-made GitHub actions (= easy start for CI/CD) and for a small team, I'd say that actually getting to developing the application is way more important than spending resources setting up a fancy self-hosted CI/CD environment.
Resources for getting started with the tools mentioned and Github Actions:
[Checkstyle Github Action](https://github.com/jwgmeligmeyling/checkstyle-github-action), [Github Actions docs: Building and testing with Maven](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-java-with-maven), [using Junit 5 with Maven](https://www.petrikainulainen.net/programming/testing/junit-5-tutorial-running-unit-tests-with-maven/)