
For many programming languages, Jenkins is popular option for CICD implementation, and it works great with Python as well.
First we need to pull the source code from some SC, unlike github actions while the source code is already there. Multiple libraries
are valid options to complete linting, but for example pyLint works well and has great amount of functionalities. Again, Testing could be done using 
various tools, but now we choose PyTest. Or in this case (for Django project) since we'r using Jenkins; Django-Jenkins would do all the necessary to pull through all the common CI/CD steps.
More good alternatives for Github Actions and Jenkins are Atlassian Bamboo, JFrog and Microsoft TFS.

Personally I prefer a self-hosted style. But in many cases it is a way easier to get started with cloud-hosted environments. For example, cooperation between Jenkins and GitHub
might require some configurations in GitHub to include Jenkins address. This address has to be publicly accessible, 
so there is much more work to setup own environment than just use some cloud-based option. However, pipeline for development environment when there is no need the application
to be accessible outside the network, it's a good option to host everything locally.
