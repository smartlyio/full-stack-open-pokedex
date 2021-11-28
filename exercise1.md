For linting, Java developers may use Checkstyle. It's an open source tool that can be configured to check adherence to a certain coding standard. It can also help in finding class and method design problems. Other common tools are Error Prone, which hooks into the build, PMD and SpotBugs.

For testing, JUnit is a famous framework used for unit testing. Also, for acceptance testing Cucumber may be used, during the build process. For web-based testing Selenium is used for regression tests.

For building, the two most common tools are Maven and Gradle. The former uses an XML file to describe the project details, as well as dependencies. The latter, uses Groovy as a language to describe the configuration. 

Other alternatives to set up the CI are TeamCity from JetBrains, TravisCI, Atlassian Bamboo, GitLabCI, Buddy, CircleCI, Bitbucket Pipelines and AWS CodePipeline.

The selection on which environment to use depends on various factors, one of them being the size of the project. For a small project a cloud based approach should be enough as all of the phases can be accomplished without the overhead of aditional configuration. Tools like Gradle and it's plugins allows us to achieve this more rapidly without defeating the purpose of continuous integration.