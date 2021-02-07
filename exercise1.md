# Warming up
## A spring based Java backend
For our Java-Spring based backend we want to setup an CI/CD pipeline. First step of this pipeline should be linting which we will do using checkstyle to enforce codestyle and PMD to prevent antipatterns and spaghetti-code. To maintain an overview of code quality we can use Sonarqube as a dashboard.

Tests will be implemented and run using the JUnit library, to extend our mocking capabilities we will use Mockito. To make sure our tests cover most of the actual code we will also use JaCoCo code coverage monitoring and feed this information into Sonarqube for easy visualisation.

As common for Spring projects our project will be built using maven. Maven is great because it doesn't only take care of managing libraries but also has plugins for the linters and test runners we have chosen, so the setup of our CI/CD pipeline should hopefully be at least somewhat straightforward.

Self hosted alternatives to Jenkins include circleci or GitLabCI. GitLab has the benefit that it also comes with a git, so there is no need to get the code off the company servers for maximum privacy. GitLabCI can also be used on GitLab's servers so if more powerful servers are required the project can be migrated without too much of a hassle. Other online CI services include TravisCI and AWS CodePipeline. The latter is very useful when also running production on AWS infrastructure like EC2 or Lambda.

Cloud or self hosted depends on the kind of the Project, if the software is proprietary and may be secret a self hosted CI may be better. For an open source project probably cloud based CI is the way to go. As we'd like to include Sonarqube as quality control dashboard for this project we will probably go self hosted.
