The language chosen for application development here is **Java**. Execution of the basic CI steps **linting**, **building**, and **testing** for this language is ensured by using different tools such as:  
### Linting:
> SonarQube - static analysis tool 
> Checkstyle - java style checking tool and has plugins for major IDEs
> sonalint - a hybrid tool 

#### Building:
> Maven - specific task plugins supported suports multiple projects working concurrently
> Apache Ant -  codes written in XML
> Gradle - supports incremental builds (modern Apache Ant)

#### Testing:
> TestNG – supports all three (unit, integration and end-to-end testing)
> citrus- common integration testing framework
> Selenium WebDriver- end-to-end testing with good UI quality 

##### Some good options for **CI setup** besides Jenkins and GitHub actions are:
> TeamCity- suited for developers' requirements
> AWS CodePipeline- good alternative for Amazon users as it supports cloud-based tool > Spinnaker- CI component required for continuous delivery side of a CI/CD pipeline

Based on the requirements of the application, we can opt for a **cloud-based environment** compared to **self-hosted environment**. Some major aspects which have been taken to account while choosing the environment are described briefly below:
 
 > Hardware maintenance and cost : Building proper infrastructure for a self-hosted solution, can take a long time and financial resources in contrast to simply renting a cloud-based environment for fulfilling the application's needs for a group of six people. 
 
 > Accessibility : Cloud-based environment makes it easy to access data with internet connectivity alone while the other may need a VPN setup for accessibility.
 
 > Security : Weighing out the aspects of security as well, cloud-based environment appears to be a better choice.  

