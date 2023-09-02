# Java

## Tools

### Linting
VS Code has java formatting and linting built in. You can specify a formatter profile or use the default settings for linting. 

### Testing
JUnit is one of the most popular Java unit and integration testing tools. It has IDE support so it can also be run by a VS Code extension.

### Building
One of the most popular tools for building is Apache Maven. Maven manages project dependencies by downloading them from repositories and creating a dependency tree. 

## CI setup alternatives

### Self hosted
Self hosting means being responsible for the infrastructure of where the CI/CD server runs. Some options for this are GitLab CI/CD, TeamCity and Bamboo.

### Cloud based
This means you run the CI/CD server on the cloud so you dont have to take care of the infrastructure, server or software. Some options for this are Travis CI, CircleCI and Azure Pipelines.

### Choosing the right option for a project
Deciding between the two you need to take into account multiple things. Self hosting needs more expertise on running the server and while cloud hosting is simpler. Cloud hosting is easier to scale when you need to grow ( or downgrade ). Budget also plays a role. Upfront cost of self hosting is bigger but cloud based CI/CD has ongoing subscription fees. Maintenence costs are higher when self hosting and you need the personnel for it.