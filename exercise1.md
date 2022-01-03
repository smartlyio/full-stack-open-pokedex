## Exercise 11.1

I chose Python for this exercise to answer three questions as instructed on https://fullstackopen.com/en/part11/introduction_to_ci_cd

### Question 1

There is quite a diverse amount of different linting tools for Python as well. I found about Flake8 and Pylama. They both combine many different linters and tools to analyze code. Pylama seems to be composed of more tools than Flake8 was.

For testing, there is commonly known PyUnit or UnitTest which comes standardly from the Python library itself. There are also other options such as Robot, PyTest, Doctest, Nose2, Testify, and many others.

For building, I didn’t find as many possibilities. I found about PyBuilder, zc.buildout, SCons, and some others.

### Question 2

When I was looking into alternatives to set up CI besides Jenkins and Github Actions, I was surprised by how many results came. For ex. GitLab, Atlassian Bamboo, JFrog Pipelines, Spinnaker, Buddy, AWS CodePipeline, Integrity, Travis CI, BuildMaster, Azure DevOps Server, and MANY others. The lists were huge. What exactly was the best alternative is quite unclear – because everyone has their own opinions which are nice to see. And many tools are good in their own thing.

### Question 3

I am not entirely sure would self-hosted or cloud-based environment for Python itself. It depends on so many different things like where the repositories exist. It might make sense for example to use Azure DevOps for pipelines if you are storing repositories there as well. At my current workplace, we have a mixture of Azure DevOps with Github. We first used Azure DevOps because our infrastructure is hosted in Azure. But the repositories are hosted in GitHub. We moved the ticketing system to GitHub and are going to move our pipelines away from Azure DevOps to GitHub Actions to have everything under the same roof. Apart from that, it is also important to listen to what tools the developers are comfortable and familiar with so the right tools are chosen for each purpose.
