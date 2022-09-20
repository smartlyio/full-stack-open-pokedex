### 11.1 Warming up

For a Java CI project there doesn’t seem to be a golden standard for linters. Popular code analyzers that seem to be mentioned often are Checkstyle, PMD and SpotBugs. Sometimes multiple analyzers are used to cover different things. 
Checkstyle is an open-source tool that checks code against a configurable set of rules. PMD finds common programming flaws like unused variables, empty catch blocks, unnecessary object creation, and so forth. SpotBugs uses static analysis to look for bugs in Java code.
The most popular unit testing framework for Java is called JUnit and the latest version of that is JUnit 5. Depending how the GUI is implemented, other testing tools might be needed.
Maven is the most build automation tool for Java applications especially for enterprises. Maven project is controlled through file called pom.xml. pom.xml file contains information of project and configuration information for the maven to build the project such as dependencies, build directory, source directory, test source directory, plugin, goals etc.
For a smaller project Gradle could be better since its very lightweight and has similar functions as Maven.
Alternative choices for Jenkins and GitHub Actions are JetBrains TeamCity and Bamboo from Atlassian.
For a small project cloud-based solution might be better, if none of the team members have experience on setting up self-hosted setup.
