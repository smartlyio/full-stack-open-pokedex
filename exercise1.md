I think that we should have done it before. But now that we are about to release our app, we have to set up our CI/CD workflow.

So first of all we need to take care of linting our codebase (written in Python). We can use Pylint and we can document which standards we will follow to lint our code.

Also, we will have to test our codebase and be sure that the deployed version always passes our tests. To do that we will use unittest, a widely used unit testing framework for python.

In terms of builts and only when required, we will be using the bdist module that will make our lives easier when we have to create packages or set a different configuration for a specific platform/end-system/os.

There are several alternatives to Jenkins like Buddy, FinalBuilder, GoCD, IBM Urbancode and GitLab CI. Since we have our codebase on GitLab we will be using GitLab CI to set up our CI/CD env/workflow.

Since we are starting our project/app, and there are not millions of customers nor hundreds of developers working on it, a cloud-based environment like GitLab CI will be a good starting option. But when our app scales, and hopefully it will, we would have to consider self-hosted options like Jenkins, to set up a proper CI/CD environment/workflow adapted to our needs.
