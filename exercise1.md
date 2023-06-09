# CI/CD in C#

For this exercise I have chosen to examine CICD from the point of view of C# and the .NET environment.

## Linting, testing and building

For C#, there are several tools for linting, two of the more popular ones being StyleCop (open source)
and JetBrains' ReSharper. For testing, NUnit and xUnit are commonly used, according to Microsoft
documentation. For building, Visual Studio provides a comprehensive build system for managing
dependencies and generating deployable artifacts.

## CI (besides Jenkins and GitHub Actions)

Even though GitHub Actions might be the most logical choice for any C# project at this point (being owned
by Microsoft), Azure PipeLines seems to also still be operational. However, for any new C#/Azure
project, it might be reasonable to consider just using GitHub.

Outside the Microsoft product family, JetBrains offers TeamCity, which has both a self-hosted CI server
option and a cloud-based one. It also provides integration for other types of version control than git.

## Cloud or on-prem?

Deciding between a self-hosted or cloud-based CI environment depends on factors such as project
requirements, budget, and team resources. Self-hosted environments give organizations more control over
infrastructure and security, but require hardware, maintenance, and expertise. Cloud-based solutions
offer scalability, ease of setup, and integration with other cloud services, but involve subscription
costs and potential limitations.

To make an informed decision, it's essential to consider factors such as the size of the team, the
complexity of the application, infrastructure requirements, and the need for scalability and
flexibility. Evaluating the cost and effort associated with setting up and maintaining a self-hosted CI
server versus the convenience and additional features provided by cloud-based CI platforms is crucial.
