# Exercise 1 solution

- When writting applications in a Python ecosystem, popular tools used in some CI setup steps are the following:
  - **Linting**: *pylint* offers static code analysis, looking for programming erros, allowing to adhere to coding standards, among other code suggestions. It's quite flexible, adapting the way of handling with warnings and errors from within the application's code. It should works as JavaScript's Eslint version of Python.
  - **Testing**: *pytest* is a testing library which requires very little code to setup and start working. It handles most testing requirements a user could need, very helpful when it is used by a new Python user..
  - **Building**: *setuptools*  is a library that helps build and distribute Python projects. Distribution information such as name, project and python version, packages, in addition to other data, are provided to setuptools' setup method to configure the building process of the project.

- Some alternatives to Jenkins and GitHub Actions are BitBucket, CircleCI, Azure Pipelines, TravisCI, GitLab CI, The latter was the commonly used throughout the community in the past given GitHub Actions didn't exists before. 

- For the hypothetical project mentioned, a cloud-hosted CI/CD solution should be chosen. The team size suggest that the application should likely be small as well, Given the specified circumstances and assuming there will not be special requirements from any development process, there is no need to dedicate time and resources into the setup of a self-hosted CI solution.
