**Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? The chosen language for this part is C#.**

#Linting

- In c#, linting and any kind of static code analysis is mostly done using the .NET compiler platform called “Roslyn”. There are some other linting tools such as Sonar, Resharper , StyleCop and FxCop, but a few years ago FxCop were converted by Microsoft into embedded Roslyn analyzers. This means that running a .NET project in Visual studio will notify styling errors as compiler warnings.

#Testing

- There are several different testing libraries for C#. The ones recommended by Microsoft are xUnit, NUnit, MSTest and .NET CLI. These are mostly used for unit tests. .NET also provides its own package https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Testing for all manners of testing.

#Building

- C#/.NET apps are usually built from visual studio, where native MS tools create a framework-dependent deployment where the result is .dll or .exe file of some sort. An app can also be built as a self-contained bundle that contains the .NET runtime and libraries as well as app code and dependencies. This version can then be run on a machine with no .NET installed at all.

**What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!**

- Some notable alternatives to Jenkins & Github Actions include CircleCI, Azure Pipelines and Gitlab CI.

**Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**

- Since the team size is 6 and we are working on a single app, it would be smarter to use a cloud-based environment. This is because self-hosting is more expensive and requires more maintenance, which we cannot afford with such a small team. Also, any self-configuration would only be used by the 6 people, which is not efficient. Unless there are some major privacy concerns or we are planning to scale massively, we should go with the cloud solution.
