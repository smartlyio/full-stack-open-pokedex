The language discussed is Java

a.Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.

a. Since the most used code editor with Java is IntelliJ I'm looking mostly at tools that integrate with that.
   When it comes to linting, one of the best ones is Prettier: has wide support and 
   integrates with other editors, so no problem if people use different environments.
   Another one is SonarLint which has it's main usage in finding bugs and providing quick fixes.
   After scanning some articles most often mentioned testing framework is Junit +
   Selenium(for which a bunch of courses exist too)
   When it comes to build management the two with most mentions are Maven and Gradle. 
   One is based XML the other runs its own scripting language called groovy.

b. What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!

b. One tool about which I heard from a podcast is CircleCI. It integrates with github 
   so I assume it is an alternative for github actions. Another cool tool is gitlab, 
   almost identical to github for basic use but offers continuous deployment, while 
   with github you need a third party tool. An alternative for self hosted CI tools 
   would be Hydra, which runs only on NixOS(the upside to the downside is that,
   with using NixOS you do everything the Nix way and everything becomes reproducible,
   including workstations and servers configs which can then be deployed on new
   hardware super dandy relaxat)

c. Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

c. Since the release is to be done soon, if no infrastructure is already in place I would opt
   for the cloud solutions, specifically for the reason that it is easier to setup.
   There can be made a case for the self hosted solution if the six programmers are part of a
   company which already has available hardware and boilerplate configurations for a quick
   setup.
   In a similar vein if the team is an independent group of programmers who is working on
   an new product that doesn't already have extreme build times, the cloud solutions could be
   more sensible.
