Python is very used as an intermediate language throughout the ecosystem of developing an application. Along with bash/shell,
it is frequently used to bridge the gap, so to speak. 

For linting on Python, `pylint` is a classic choice. while on bash side, `shellcheck` is always in my system, even though I barely think of it.

On the testing side, `pytest` is the de-factor the choice for unit tests and integrated tests for python. Regard of Shell, 
as its position, I'm not as familiar but according to google, tools like `shellspec`, `bats` and `shUnit2` can be useful.

For building on Python, setuptools is the built-in tool for handling packages, while people write Makefile for simple bash building.

For setting up CI, it can be easy for a simple project to use in-house solution for listening incoming webhooks and dispatch accordingly. As of other SaaS, there are some common services like Travis CI, CircleCI, DroneCI, Gitlab CI/CD, and many solutions by cloud service providers like GCP, Azure, AWS.

Most of the existing services mentioned above are cloud-based solution, so it may be easier to just buy into 

Some factors to think about:

- Cost. If there are idle bare metals lying around, it may be worth it to spin them on some Gitlab runners.
- Data safety/compliance. When the code/data are on more of a confidential state, it may not be as wise to give them around.
- Development progress. It may not be as easy to debug on the cloud than having all the data locally. If it's at the beginning of development with hyperactive changes.  