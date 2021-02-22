We think that the application here is written in C++. Linting is performed with clang-tidy, or cpplint. 
Unit testing is taking care of with Google Test and/or Boost Test Library. Unit tests are configured
to happen locally in every local build. Unit tests are also run when pushing to repository.
CMake is utilized as a build system, with additional Python and shell scripting. Incredibuild or something
similar should be set up in order to have distributed builds. Integration testing is set up with own
scripting (Python, shell). VectorCast and/or FitNesse might be useful ready-made solutions as well.

As an alternative CI one can use Travis as a self hosted system. For cloud, Gitlab Pipelines can be
used if repository is hosted there, or AWS CodeCommit/Build/Deploy/Pipeline. Bitbucket Pipelines is 
alternative if that repository is used. JetBrains offers TeamCity, that is a general CI/CD solution.

C++ projects can be heavy for resources, take long to build, and specific needs for libraries can
mean that cloud based systems are hard to configure. Self-hosted system is probably a better alternative, but
requires more resources, money and time. If only few developers are working on a project, self-hosted solution
is not reasonable. Also it requires more time to maintain, and a dedicated computer. Distributed builds also 
require more computers, when with using cloud based solution scaling up is easier and faster. Cloud-based systems
have the huge advantage that they usually contain the whole pipeline, starting with the repository, and
operations hook into actions, tests and deployments in a ready-made manner.