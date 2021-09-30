Let's imagine a team of 6 people creating the best accounting software
with Java. They have to create a pipeline for continuous integration (CI) and
deployment (CD). I believe the best platform to create Java applications
is the IntelliJ platform. They provide a multitude of tools for development,
those of which include linting tools - with ESLint-, an integrated testing 
framework, build tools, and an external cloud service for CI/CD - 
called TeamCity. They offer a self-hosted service and a cloud service.

Let us first consider other alternatives. The team could for example use 
other cloud services with such as GitHub Actions, Amaxon ECS, CircleCI, 
or an set up an independant server with Jenkins, GitLab, Bamboo 
and so on.

A cloud service would probably fit this project the best, considering the 
team is relatively small and a cloud CI/CD shouldn't be that difficult to 
set up. This approach would more likely be cheaper than renting a server. 
It is also a scalable solution, since cloud based services have quite a lot 
of room for growth. 

Now back to TeamCity. They price their cloud service at a solid 45 dollars
per month whereas GitHub Actions have a price of 24 dollars 
for 3000 minutes of Actions per month. They also offer free Actions if
the repository if public, i.e. the project would be open-source. 
If the accounting software were open source, GitHub Actions would be an 
obvious choice. If it were closed-source, TeamCity might be an attractive
option.
