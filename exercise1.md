Description: AS .NET (C#) application being worked on by a team of about 6 people. The application is in active development and will be released soon.

1. Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? 

There are multiple ways to lint C# code. Some examples of popular solutions are StyleCop, Sonar, Resharper, FxCop, Roslyn and others. There are plenty of tools for testing. For example, 
popular UI testing frameworks are MSTest (Visual Studio Unit Testing Framework), CSUnit, NUnit, xUnit.NET, etc. EasyMock.NET, DotNetMock, Rhino.Mocks let one mock objects for given interfaces.
Build tools include Build Tools for Visual Studio, VS Web Build, MSBuild and other.There are also code coverage tools, for example, NCover and dotCover.

2. What alternatives are there to set up the CI besides Jenkins and GitHub Actions? 

Possible alternatives to the mentioned solutions are CircleCI, GitLab CI, Buddy and more. Top cloud services providers offer their own solutions. For example, MS Azure has Azure Pipelines, AWS - CodePipeline, GoogleCloud - Google Cloud Build, etc. 
Choosing the right CI/CD system can be tricky, but in any case it is either managed (cloud-based) or self-hosted environment.  

3. Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

It depends on the situation. Supposing that it is not a very complicated application as the team is relatively small, cloud based environment could be a better option. In most cases, it is easy and fast to start using it.
We, for example, don't know if we have DevOps engineers, system administrators on the team. Nothing mentioned about any custom commands or special requirements (say, something special in terms of security when developers are not allowed to use cloud solutions) and actions that we might need, so let's suppose that we will need a pretty "standard" set and that is one more argument in favor of cloud. 
For example, Azure Pipelines will especially suit users with a background in Microsoft technology.