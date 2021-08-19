## Point 1

For Python continuous integration, since it is a interpreted language rather than a compiled one, it's build revolves around executing the code, therefore, automating the build is more about not introducing errors that "break the build" so that everyone is working on an stable version. Thanks to CI there are many small changes instead of a few massive ones, which is much easier to locate an error when originated.

Also, broken deployments are prevented by running a test suite of unit and integration tests when the developers check in code to a repository. This allows to catch any bugs accidentally introduced, said bugs are also reported and prevent the deployment from continuing.

## Point 2
Some alternatives for CI are:

 - Go CD: A CI server by ThoughtWorks designed with best practices for
   the build and test & release cycles in mind.
 - Bazel: A build tool that works with CI tools to organize large code
   bases and provide consistency with a well-defined build process.
 - BuildBot: A continuous integration framework with a set of components
   for creating your own CI server.

and many more.

## Point 3
Just as it was previously mentioned, using a self-hosted or cloud-based environment depends on the necessity of the current project.

If you are working on a small project, cloud-based saves you a lot of configuration trouble, works good and it's cheaper but, if you are working on a large one where there would be many teams involved and the project is heavier, self-hosted is better, allowing you for custom configurationd and hardware, and it's cheaper than using the rates of cloud-based environments.