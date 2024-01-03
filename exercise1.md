# CI/CD

Our application will be a basic Java Spring Boot backend server and to create the CI/CD pipeline we will follow these steps:

## Linting

We will be using [SonarLint](https://www.sonarsource.com/), a free IDE plugin which is easy to setup and can give instant feedback to help us write better code.

## Testing

To write the tests which check the functionality of our app we will be using [JUnit](https://junit.org/junit5/).

## Building

Since our application is using [Maven](https://maven.apache.org/) we can just build the app from the CLI with `mvn clean install`.

## Deploying

The last step is to deploy our app which we will do with [Azure](https://azure.microsoft.com/en-us), a cloud computing platform run by Microsoft.

# Setting up the pipeline

To make this whole pipeline possible we can either use a self-hosted or cloud-based server. This decision depends on factors like team resources, infrastructure and project requirements.

If we decide to go with the self-hosted setup we will have more control over the hardware, configurations and data, but the downside is that it is more complicated to setup.

In a cloud-hosted setup the environment is not something we need to worry about. It's there, all that is left is to tell it what to do. Doing that usually involves putting a file in the repository and then telling the CI system to read the file.

We will go with a cloud-hosted server for this application.

