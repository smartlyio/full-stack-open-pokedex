
### Some common steps in a CI setup include linting, testing, and building.

Source -> Add tests code -> Push to Github -> compile -> automated tests for the latest code -> build package -> release

### What are the specific tools for taking care of these steps in the ecosystem of the language you picked?

I picked Java.

Visual studio code
Java compiler
Github , git-lint
JUnit
Gradle or CMake

### What alternatives are there to set up the CI besides Jenkins and GitHub Actions?

Microsoft azure
CircleCI
Atlassian Bamboo
Travis CI


### Would this setup be better in a self-hosted or a cloud-based environment? Why? 

I assume that this project is consists of less than 10 developers who are working in distance from each other and the size of the project is small. In this case, I can use a cloud-based environment such as Github action. Because this is a single project and no need for specific hardware for deploying the product. Also, there is an automated configuration setup feature, ie means that we don't need to hire a person who takes care of complex configurations for the CI environment, hardware maintaining, and the cost is relatively low. In addition, the initial setup is very fast because it is already prepared in the cloud system. In contrast, in a self-hosted environment, the responsibilities of maintaining hardware, performance tuning, security, authentification, and finding issues related to downtime are us. Also, there is a time-intensive setup for the initial CI environment at the beginning.

### What information would you need to make that decision?

Initial setup time.
Security issues.
The size of the project.
Hardware dependencies.
Hardware maintenance.
Administration.
Downtime issues.
Maintaining cost.
Migration flexibility.
Hiring people who maintain the system.
