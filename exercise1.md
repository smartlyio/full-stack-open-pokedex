For linting python, the library flake8 can be used which is able to detect logical and stylistic lint. 
The pytest library can be used for unit testing. It also has an extension pytest-cov to check for test coverage.
Since python is an interpreted language there is generally no separate build stage for it.

Buddy is an alternative CI tool which states that it has 87% faster adoption time and a 12 second average deployment time.

Usually to make such a decision factors including pricing, the size of the team, the programming language should be taken into consideration. 
For example it might be cheaper to use cloud-based solution if it's a small project that doesn't require buying fancy equipment. Also the set up and use
of the hardware and CI tool should be taken into consideration as a team might not be big enough for a team member to dedicate him/herself for 
maintaining the pipeline. Also the programming language or technology stack is a factor because while most CI tools support a large amount of languages,
the application language might not be one of them. Therefore, some application specific configuration might be required. 
Buddy would be better in cloud-based environments as it is a web-based and self-hosted CI tool designed for Git users.