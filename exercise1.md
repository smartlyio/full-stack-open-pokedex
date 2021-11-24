1) Java and web applications. Specific tools for linting, testing and building (I prefer the following):
- Netbeans IDE (Integrated Dev Env) that includes Maven, Git integration and Lint plugin
- Selenium for automated browser web testing
- Git for version handling/controlling
- Jenkins for CI
- Maven for building
- Checkstyle for linting


2) Bamboo-JIRA or Bamboo-Bitbucket are good alternatives for Jenkins and GitHub.
There are quite many other options too e.g. GitLab, CircleCI, TeamCity, Travis CI, BuildMaster, Bitrise, Spinnaker, UrbanCode, Buddy, Drone.io, AWS CodePipline.
See: https://www.lambdatest.com/blog/best-jenkins-alternatives/

3) Cloud-based environment would be good enough if the application don´t need any very special hardware components/resources e.g. Graphics card (GPU), special processor etc. Amount of developers (6 people) is quite low and this is not giving any special needs for the servers. If there is a need for flexibility related to the server resources, then self-hosted would be better. If the new application is very new and mind blowing, then I would bought own servers instead of buying cloud services. Then it would be easier to control where the data is and who have an access to it. 

If I could choose one, I would need more info about resource needs, how sensitive is the application and/or how sensitive data is storing in that application. Also the response time limitations need to know, because if very big files like 3D data need to be downloaded and save effectively, servers must be near the end users.