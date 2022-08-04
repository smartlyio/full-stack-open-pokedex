I will answer with regards to Java language, as the steps in a CI setup:

- Trigger: CI tool is to be notified when new code is committed and there are changes to the repository. The CI tool can be Jenkins.
- Checkout: the CI server will check out the code from the source code repository from certain commit point by the trigger.
- Code compilation: it can be Maven or Gradle for Java, ultimately with Docker as container.
- Unit test: execute the tests in the codebase, with possibly Maven or Gradle.
- Packaging: for Java it can be packaged as JAR files, after all the testings are done.
- Acceptance test: make sure the application as a whole will meet all initial requirements. Cucumber tool is a fine choice.
- Delivery/Deployment: requiring a product deployment environment, such as Kubernetes.

Among a lot of good alternative varieties out there, I would suggest GitLab, AWS CodePipeline and Azure DevOps Server. For small Java projects, Maven and Gradle could work just fine.

For this simple set up, I believe cloud-based environment would suit better. Self hosted environment often require too much of knowledge about setting up our own server from scratch, how to set up configuration and other overhead issues and costs. Cloud-based often include everything we need for a small production, we can cast aside the worries of setting up our own server, which enhance productivity. And with its convenience of a cloud-based hosting, we can save our resources to focus on our main production.

Of course we need to take our production into considerations, such as how big it is, how much resources it would take up, and how much money we can save between different hosting environments. However as time goes by and our production grows up, we can totally modify our hosting environment.
