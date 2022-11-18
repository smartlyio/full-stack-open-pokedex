Essays... I hate forced essays.
I didnt write any since university, which I finished 10 years ago.

As stated in the exercise, I have to think about a hypothetical situation with some applecation that is being developed by some people. For example, we have 6 persons and they are writing something on Python.
For linting purposes they would have to install flake8 or pylint and write some config for it. If the linting config is different for each of those developers, they probably will face many problems, especially if they use some different autoformatting tools.
Testing python apps can be made with unittest, nose, nose2 or pytest.
Building python apps can be made with Pyinstaller which can make executables to run python app on machines that have no python installed.

There is a lot of alternatives to CI besides Jenkins and GitHub Actions. Some of them are BuildMaster (Inedo), TeamCity (JetBrains), Circle CI, Bamboo (Atlassian), Buddy, Travis CI, Drone, CloudBees CodeShip, AppVeyor, GoCD, Semaphore, Buildkite, UrbanCode (IBM), Azure DevOps (Microsoft).

Self hosted environment is better for bigger companies with dedicated software engineers, as I suppose. There can be some advantages with more control over all the processes around.
For smaller groups like this one, with 6 developers, I think cloud-based environment would be the best. They are thoroughly tested by millions of users / developers, so there is smaller chance to get some unexpected behaviour of this environment compared to ill-maintained self-hosted one.