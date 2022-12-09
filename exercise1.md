CI/CD pipeline options for C#/.Net

Linting
- c-sharpier
   - https://github.com/belav/csharpier
   - Based on prettier

CI Pipeline
- Can Github actions or Jenkins
- Can also use Azure ecosystem for a lot of the automated tasks
- Jenkins can be integrated with Azure web service
- Can also push to docker with both Github actions or Jenkins

Testing
- There a several different testing frameworks available for C#/.NET:
    - xUnit
        - considered the best unit testing framework
        -  fewer attributes which  makes the code clean and easy to maintain
    - NUnit
        - good interoperability features
        - fast testing execution speeds
    - MSTest
        - used for unit testing
        - lacks performance
        - experience can be sluggish and doesn’t have interoperability
    - Built into language
        - Infrastructure components, such as the test web host and in-memory test server (TestServer), are provided or managed by the Microsoft
        - AspNetCore.Mvc.Testing: https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-7.0#test-app-prerequisites

Build
- .NET sdk can be run automatically by a build script on a continuous Integration (CI) server
    - GitHub actions has integrated option for this
    - SaaS CI solutions include Travis CI, AppVeyor, and Azure Pipelines

Alternatives
- Gitlab
- Publish to repository and construct an Azure DevOps Services pipeline using  azure Pipelines
    - This is an online solution as Azure is cloud based