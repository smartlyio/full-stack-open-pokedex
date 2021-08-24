Java linting tools are Checkstyle, Lightrun, PMD Source Code Analyser, SpotBugs and Sonarlint just to name few.
Java testing tools are JUnit, JBehave, Serenity, Selenium, TestNG, Arquillan and many, many others.
Building tools for Java are e.g. Jenkins, Apache Ant, Apache Maven, Gradle, TeamCity, Travis, etc.
There seems to be many, many alternatives for all of these.

Some Java CI stand-alone tools (besides the maybe most popular/highest ranked Jenkins) are Travis CI, TeamCity and Bamboo. Hosted CI alternatives (for Actions) could be e.g. Circle CI and TeamCity.
Quick points to consider:
- Travis only works with GitHub, it is well documented and has a helpful community. It is free only to a certain extent.
- TeamCity is not very widely promoted and deploying is said to be not very flexible. TeamCity has a free version, but it is limited too small for our purpose (i.e. team of 6 people). I'd skip TeamCity at this point.
- Bamboo works with GitHub but others too. Bamboo is free of charge for non-profit organisations, OS-projects and schools. (I'm not sure if "our hypothetical project" is any of such...)
- Circle only works with GitHub, it is said to be easy to setup and has a customer support. Circle can be relatively expensive (e.g. over 3000$/month).

Our six peoples' team is quite small. At this phase we wouldn't want to set up and host our own servers for CI/CR, but rather rely on cloud based hosted services. However, money can be an issue. Some open source tools are free of charge for no-profit projects (which I doubt our project is) and hosted services can be quite expensive. Hence, it may be that we need to set up our own servers and host CI/CR by ourselves. Anyway, it can't be rocket-science. One thing to consider when choosing the CI/CR tool is where our code repositories currently exist (e.g. GitHub, GitLab, BitBucket and alike). To be able to rely on a cloud based CI/CR-solution, we'd need to know if it has all features to support all the especial requirements our application may need beyond the normal. Choosing between own vs. cloud based CI/CR depends also on the future of our product/project (e.g. if it's just in maintenance after finished, or an expanding project with long life-span with a growing team of developers).
