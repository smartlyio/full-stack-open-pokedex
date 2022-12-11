#Linting, testing and building
Java has been around for some time and is still used by many communities. For Java there are handful linting tools available. [1] lists few of them: Checkstyle, Ligthrun, PMD, Uncrustify, Error Prone, Tattletale, UCDetector, linter for Scala, Scalastyle as Coala with each tool a link to provider's home page. There are multiple ways of testing Java applications. Unit or integration testing are not the only ones, as [2] presents. With unit testing in place it is possible to show case that a single entity works as expected. [2] lists JBehave, Serenity, Selenide, JWebUnit and Gauge as few frameworks that Java developers can use for unit testing with each tool similar principle how they work. As for building tools there are multiples options available. According to [3] there are tools like as Jenkins, Ant, Gradle, TeamCity and Maven that can be used for building Java applications.

#Alternatives for CI besides Jenkins and GitHub Actions
[4] lists few options. GitLab is one such a tool and with the help of it, pipelines can be constructed fairly easily. Circleci is another tool providing on premise and cloud hosting options, shipping with a free and licensed version and support for Linux and MacOS. For other tools [4] introduces a list of 14 tools. Additionally Azure's DevOps could be used for CI as presented in [5].

#Setup as self-hosted or cloud-based solution
Due to familiarity of Azure DevOps I would choose that for CI/CD tool. Azure DevOps tool can be run only on cloud environment on Azure portal. It provides a rich set of tools facilitating working with CI/CD. The learning curve is relatively low as as there are multiple online tutorials available. [5] The tools ships with variety set of boards, wiki, artifacts, test plans configuration options.

#References
[1] - https://lightrun.com/top-10-java-linters
[2] - https://www.parasoft.com/blog/java-testing-tools-10-best-practices-for-writing-test-cases
[3] - https://www.filecloud.com/blog/2019/06/top-10-build-automation-software-for-2019/#.Y5XOanZBz-g
[4] - https://katalon.com/resources-center/blog/ci-cd-tools
[5] - https://learn.microsoft.com/en-us/azure/devops-project/azure-devops-project-java
