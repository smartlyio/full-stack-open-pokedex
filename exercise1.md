I picked Java

Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
-
Linting: Checkstyle (style checking), spotbugs, pmd (static analysis)
Testing: JUnit, Mockito, Selenium
Building: gradle, maven,...
---
What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
-
Microsoft Azure DevOps, CircleCI, AWS CodePipeline
---
Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
-
The choice between self-hosted and cloud-based environment depends on several different factors, like:
1. Size and complexity of product
2. Testing needs (standard vs specific tests like GPU-intensive tests)
3. Security concerns
4. Time-to-integrate
5. Available Financial Resources
