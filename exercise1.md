# Possible CI/CD setup for Java

Exercise 11.1 in Helsinki University Full Stack Open 2023 MOOC. Discussion around a possible CI/CD setup for a language I do not know about – Java.

## What is Java?

[Java](https://www.oracle.com/java/) is a popular programming language used in many large scale projects. Java platform independet and runs on a Java Virtual Machine (JVM). Java is object oriented, like [Python](https://www.python.org/), and has a large standard library which provides pre-built classes and methods, like [Javascript](https://tc39.es/ecma262/). Javascript also provides multi-threading, and can perform multiple tasks simulataneously, which Javascript and Python can not – although Javascript has workarounds to enable concurrent operations.

## Tools for linting, testing, and building

There are many CI/CD tools available for Java. Some of the tools available for linting are [Checkstyle](https://checkstyle.sourceforge.io/), [PMD](https://pmd.github.io/), and [SpotBugs](https://spotbugs.github.io/). These tools are used for enforcing coding standards and spotting bugs. Testing is also an important part of CI/CD. [JUnit](https://junit.org/junit5/) and [TestNG](https://testng.org/doc/) are popular testing frameworks for Java with a variety of different tests. Common building tools are [Apache Maven](https://maven.apache.org/) and [Gradle](https://gradle.org/). Gradle offers more flexibility compared to Maven and is gradually gaining in usage. An older build tool is [Ant](https://ant.apache.org/), which uses XML-based build scripts to manage the build process.

## Alternative CI:s

[Jenkins](https://www.jenkins.io/) and [GitHub Actions](https://docs.github.com/en/actions) are two popular CI/CD tools. Both tools automate building, testing, and deployment of code. Jenkins allows developers to define complex build pipelines whereas GitHub Actions is closely integrated to GitHub, and uses YAML-files to define workflows. Alternative CI/CD services include [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) by Atlassian, [Azure DevOps](https://squaredup.com/azure-devops-dashboards-for-total-oversight/) by Microsoft, and [AWS CodePipeline](https://aws.amazon.com/codepipeline/) by Amazon Web Services.

## Self-hosted or cloud environment?

All of the CI/CD services mentioned above are cloud based. I believe a cloud based service would be better to a self-hosted one, because it would simply the deployment infrastructure by moving some of the software configuration to the cloud. All of the above tools for linting, testing, and building also work well in cloud based setups.
