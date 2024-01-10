Let’s assume the application runs on C# .Net Core ecosystem.

The source code editor used is Visual Studio Code which provides linting by enabling Roslyn Analyzers (follow steps in https://johnnyreilly.com/eslint-your-csharp-in-vs-code-with-roslyn-analyzers). We add a`.editorconfig` file to control all the code style settings

We can prevent building to be successful if code style is incorrect by editing the .csproj file (by including <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>)

The testing framework of choice is NUnit or MSTest. Testing can be enabled on Visual Studio Code by enabling the C# Dev Kit Extension (More information in https://code.visualstudio.com/docs/csharp/testing)

Besides Jenkins and GitHub Actions, we can setup CI with other cloud based solutions such as GitLab CI/CD and Azure DevOps, Gitea Actions 

As the team is small (6 people) and the application needs to be released soon, It is preferable to use a cloud-based environment. The setup would be cheaper and easier. The configuration required is simpler. 

The decision also depends on whether the application requires a dedicated graphics card to run. This is because servers provided by cloud-based environment usually do not have a dedicated graphics card. In this scenario, it would be preferable to use a self-hosted environment such as Jenkins where we can procure a server station with the desired hardware.