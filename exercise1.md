# Exercise 11.1

## Question 1

The tools for taking care of *linting*, *testing*, and *building* in Python:

- Linting: pylint, flake8, pycodestyle
- Testing: pytest, unittest
- Building: setuptools, wheel, pip

The tools for taking care of *linting*, *testing*, and *building* in Ruby:

- Linting: Rubocop, Reek
- Testing: RSpec, Minitest
- Building: RubyGems, Bundler, Rake

## Question 2

Here are some popular alternatives to Jenkins and GitHub Actions for setting up continuous integration:

- CircleCI - Supports containers and parallelism. Integrates with GitHub and BitBucket.

- Travis CI -Tight GitHub integration. Open source and free for public repositories.

- Bamboo - On-premises and cloud options. Flexible build plans. Integrates with Atlassian tools.

- Azure Pipelines -Full cloud-based CI/CD. Deep integration with Azure DevOps.

- AWS CodeBuild -Fully managed CI/CD service. Integrates with other AWS tool

## Question 3

I think this setup is better in a cloud-based environment. 

First, Since the team is small, they don't have a lot of extra resources to spend on infrastructure management. Managing on self-hosted environment is an unnecessary burden. The cloud provider will help teams to manage servers, so cloud setup and maintenance is much easier. 

Then, The application is in active development, so the workload may be not sure. Cloud makes it simple to add more capacity if needed. Self-hosted hardware is harder to change. 

Also, the application release is nearing, choosing the cloud-based environment is better for the team to focus on building the app, instead of managing infrastructure and maintaining servers.