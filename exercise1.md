# Thoughts on CI/CD

## Project specifications to be considered
- Scope: A Web App
- Framework: ASP .NET Core ([https://github.com/dotnet/aspnetcore])
- Programming language: C# ~~Visual Basic~~
- Backend: ASP.NET Web API
- Frontend: Blazor
- Exchange format: JSON ~~XML~~
- Real time communication: SignalR
- Build-Tool: WebAssembly (Compiles C# to be run in browser)
- Packet manager: NuGet ([www.nurget.org])
- Hosting environment: Kestrel on Ubuntu ~~ISS~~
- Development platform: WINDOWS
- IDE: Visual Studio

## 1. CI/CD-Setup
Evaluation of specific tools, setups and best practices for the given ecosystem

### Linting
To enforce the agreed upon code styling, we are taking advantage of Visual Studios integrated .editorconfig capability ([https://editorconfig.org]). Linting is automatically triggered on any commit.

### Testing
All tests need to be automatically run when a pull request to the main branch is initiated. Direct commits to the main branch are not allowed and get rejected.

#### Unit test
To ensure individual component work as desired, unit tests are implemented utilizing the test framework xUnit ([https://xunit.net]). APIs are testes via appropriate assertions.

#### Integration Test
To test interactions between components, assertions on an API- and UI-level are performed. Some tests require a complete build or at least sime build artifacts to be run.

#### Service tests
To check the application from a user perspective, end-to-end (E2E) test are in place. Each microservice is tested to function properly, taking care of corner cases and edge cases. The SUT (system under test) will use a test database, so any side-effects (database I/O, logging, etc.) can be checked and evaluated without altering production data.

#### Code coverage:
To visualize test result and coverage, ReportGenerator will be used ([https://github.com/danielpalme/ReportGenerator]).

### Building
All dependencies need to be restored by pulling the respective packages from the NuGet Repository.
Since C# is a compiled language, a compiler must to be included in the build process. While clang and GCC, the go-to compilers for C and C++, are command line tools, we use the IDE, namely Visual Studio, to compile our C# code. VS Code is not an options, since it is merely more than a text editor.
But how can we compile code automatically, without pushing a fancy icon in the menu of our IDE?

## 2. CI alternatives to Jenkiks and GitHub Actions
Azure Pipelines, as part of Azure DevOps, is a cloud-based alternative to get continuous integration and continuous deployment (CI/CD) set up.

## 3. Self hosted VS cloud-based
Evaluation on what's the prefered option for the given project.

### Information required for this considerations
How many other projects are there in the company utilizing a CI/CD pipeline? More projects and developers dealing with CI/CD may shift the decision toward a self hosted solution like Jenkins. It may require additional resources to set up, but the operating costs are quite low when running everything on company hardware. A cloud-based solution, be it a PAAS or SAAS, required far less setup but running builts and tests may be costly, since these services are being billed by build-time.

### Decision
We will be taking the cloud-based route by implementing Azure DevOps services for CI/CD. Azure provides a well suited package of tools for small to medium sized teams and is fairly easy to set up.