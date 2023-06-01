For this exercise, I chose a hypothetical application programmed in Java.

For Java, there are various tools for listing, testing, and building software. Linting refers to enforcing a specific code style throughout the code repository. Linters can also pick up on programming errors. One of the most used linters for Java is Checkstyle. For running automated tests and making sure newly introduced changes did not break existing code, JUnit is perhaps one of the most well-known frameworks used for Java. Frameworks like Selenium, TestNG, and Mockito are also commonly used. Maven and Gradle, in turn, are the most popular frameworks used for building Java applications.

In addition to Jenkins and GitHub Actions, there are numerous tools for setting up CI. Similarly to GitHub Actions, other version control platforms such as GitLab and Atlassian's Bitbucket offer their own CI solutions. Atlassian also offers a dedicated CI/CD solutions, Bamboo. Microsoft also offer Azure pipelines as part of their cloud platform Azure. Other alternatives include CircleCI and Travis CI, for example.

Choosing the "right" CI solution depends on the nature of the project and the pipeline you're wanting to set up. If the project is on the smaller side and the process is relatively straightforward, one of the cloud solutions such as GitHub Actions or Bitbucket pipelines is likely a good fit. If the project is larger and requires specific hardware resources such as a GPU, a self-hosted option offers more options. The cloud-based environments tend to be more rigid in e.g. the resources they offer whereas, for the self-hosted solutions, you can determine the resourcing yourself.

Words: 265
