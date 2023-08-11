1. Some common steps in a CI setup include linting, testing, building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?

Due to the basic understanding of Java programming knowledge, I have picked up Java as a coding language for our hypothetical application where we are going to setup CI pipelines that includes linting, testing and building. 

Linting is a process of analysing the source codes, finding bugs in the program, and keeping alert to the programmer until the fix is done. For Java, there are popular tools like CheckStyle, PMD, and FindBugs to enforce the linting in the project. Testing Java applications can be done with JUnit testing framework, which is the most popular testing tool for Java based applications. TestNG is another framework that offers more advanced testing features. Building Java applications can be done with Apache Maven which is widely used build and project management tool. Another option is Gradle which offers more advanced features for builds. 

2. What alternatives are there to setup CI besides Jenkins and GitHub Actions? 
There are plenty of alternatives besides Jenkins and GitHub Actions which I found during my search which are listed below: 
•	GitLab CI/CD
•	Bitbucket Pipelines
•	Bamboo
•	Drone
•	Buildkite
•	GoCD
•	TeamCity
•	CircleCI
•	Travis CI



3. Would this setup be better in self hosted or a cloud-based environment? Why? What information would you need to make that decision? 
The setup hosting of projects depends upon the size of project, team, and resources available for the project to accomplice. Generally, if the size of application is small and involves less collaboration than cloud-based environment is a cheaper and better choice. On the other hand, if we are building a complex application which offers more advanced features and involves large collaboration team for example in the companies then self-hosted environment is the right option to host CI setups. Also, we have to perform each configuration steps in self-hosted environment by ourselves and resources will be in our own control. 
