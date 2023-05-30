##### Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? 
Language: JavaScript (React)<br>
Linting: ESLint<br>
Testing: Jest<br>
Building: npm builder

##### What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
#### Travis
Travis CI is a cloud-based CI server where you may add repositories hosted on other servers as sub-modules and has built-in plugins for integration with prominent cloud service providers like Azure, AWS, Google Cloud. If the source code is open to the public, Travis CI can be used for free.
#### TeamCity
TeamCity is a commercial, hosted CI/CD tool by JetBrains. It is a Java-based CI server that provides build chain tools, source control, and detailed build history, features not available in most free tools. A few of the advantages TeamCity provides are:

* Easy to setup and configure
* Integrates with build/test tools seamlessly and keeps a record of the history
* Integration with IDEs allows you to build, analyse, and run automated tests without touching your code
* Provides real-time reporting throughout the building, testing, and deploying process

##### Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
Since it is a small, personal project, a cloud-based environment is a better choice. Cloud-based CI environments like GitHub Action are significantly easier to configure and use, and provide all the necessary tools for small projects that do not require specific advanced CI actions. Choosing a more flexible hosted solution would be a waste of time and resources that are not actually needed to develop the project.