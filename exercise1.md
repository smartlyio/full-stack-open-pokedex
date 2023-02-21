Programming language: .NET C#

Linting: the .NET compiler platform provides support for linting C# applications - Roslyn Analyzers

Testing: xUnit is a useful tool for implementing tests in C# applications

Building: .NET bundles the tools required to build C# applications

Linting and testing can be run using the .NET CLI. They can be configured to automatically run during build-time.


Alternative CI tool:
TeamCity may be a good alternative to GitHub Actions. It offers a comprehensive set of features and flexibility in a self-hosted environment. This is ideal where the user wants more control over the design and configuration of the pipelines, although it involves more complexity and time during the initial set up.

Factors to consider:
-GitHub Actions and TeamCity are both widely adopted, and there is good support available for both platforms
-It might make sense to first consider GitHub Actions as it would likely provide a simpler route to getting started compared to TeamCity
-There are only around 6 members in the team and one application so server resources would likely not be an issue and can be managed by GitHub Actions
-We would need to know what custom steps are required in the pipeline
-TeamCity provides built in support to get started with different programming languages
-Evaluate and compare the pricing