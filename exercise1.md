# Java ecosystem

## Linters
The most popular software for linting seems to be Checkstyle. As their github page describes it "Checkstyle is a tool for checking Java source code for adherence to a Code Standard or set of validation rules (best practices)."
But there are two more tools that are often mentioned when talking about the topic Error-prone and NullAway.
Error-prone is used to detect more errors at compile time, meanwhile NullAway is a tool that allows the user to make sure that all variables that can take the value Null are properly managed.

## Testing
In java ecosystem the most popular unit testing library are JUnit and Mockito.
JUnit provides the methods necessary to create the testing cases and Mockito as its name indicates, is a mocking tool that allows you to create fake object so you can make totally isolated testing cases.

## Building
Java seems to have many buildings tools the main ones are three. Ant, Apache Maven and Gradle.
Apache Maven is the oldest one and it has the biggest community so the support is guaranteed in some way.
Ant seems to be the less popular between the three. Ant is very flexible; it does not impose any rules like coding conventions, or directory structure.
Gradle is the most recent one and the popularity is increasing. Is built upon the concepts of ant and maven. Gradle uses Groovy or Kotlin scripts for declaring the project configuration. Gradle was designed for multi-project builds and supports incremental builds by determining which parts of the build are up-to-date.

## CI tools (Apart from Jenkins and GH actions)
Circleci is the main Jenkins alternative. It offers cloud and self-hosted options depending on the customer needs.
Another big competitor is Azure DevOps, more specifically Azure pipelines, it is a complete set of tools that allows developers to continuously build, test, and deploy to any platform and cloud. It is owned by Microsoft.

## Self-hosted vs cloud-based environment
Self-hosted CI/CD solutions give you full control over your configuration, customization and data management. You have full control over the configuration and security protocols as well.

Cloud based solutions tends to have lower cost, as you pay for what you use. And there is no need in buying expensive server machines. With self-hosting, scaling power is almost impossible, with cloud based services you can scale up and down as needed.