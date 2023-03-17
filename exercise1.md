# A Hypothetical Java Application Project

For this exercise, I chose as an example a Java project built with Maven.

### Tools for Linting

A good choice for Java linting would be CheckStyle. Checkstyle is available as a plugin for a wide variety of IDE’s and toolsets, including Idea, Eclipse, Codacy, Maven, and Gradle.
Checkstyle comes with pre-made config files that support both Sun Code Conventions and Google Java Style, but because these files are XML, they are highly configurable to support your workflow and production needs.
A project with Checkstyle built into its build process will fail to build even if minor errors are present.

### Tools for testing

End-to-end system tests and integration testing could be automated with Robot Framework. 
Robot Framework is a generic open source automation framework. It can be used for test automation and robotic process automation (RPA).
Unit tests could be done with JUnit integrated e.g. in the Maven or Gradle pipeline.

### Building

Java building CI could be implemented with Semaphore. 
Semaphore is a CI/CD tool for high-performance engineering teams. 
The leading popular build tools in Java are Apache Maven and Gradle, both are included in Semaphore’s machines.
If this hypothetical project would be built and deployed with Maven, the phases could be 
integrated to CI environment/clod-based CI config:

- compile – compile the source code of the project
- test – test the compiled source code using a suitable unit testing framework
- deploy – done in the build environment, copies the final package to the remote repository.
