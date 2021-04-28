11.1

In python tools for linting and testing are pylint and pytest. On VSC there are also extensions to help with linting while writing the code.

If there's a need to build a python directly from the main branch, the build of the application has to be from source. There are a few steps to achieve this: configure, build and post-build. The main steps are to obtain the source code, run the configure script, run 'make' and run 'make install'.

For alternatives to Jenkins and GitHub Actions I found two options that seemed solid: Microsofts Azure pipelines and CircleCI. Azure pipelines is a cloud-hosted setup which can be connected to GitHub for building, testing and deployment. CircleCI can be used in their cloud or self-hosted infrastructure. For the cloud option it is possible to use self-hosted runners for additional security controls.

Deciding between self-hosted and cloud-based environment depends on the character of the project. If the project with six people team is going to build a part of something bigger it would be quite obvious to integrate the project to the same environment, wether it's self-hosted or cloud-based. For an independent project I'd think that the cloud-based environment is the better choice to start with. The team is not that big so it seems that the project might not need self-host. If the project grows, it might be worth considering to change from cloud to self-hosted environment.