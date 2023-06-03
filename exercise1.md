--> selected language: 
Python

--> CI setup tools: 
when it comes to linting tools for python, we can use packages that use multiple linters under the hood to deliver a nice developement experience. the two most popular combo-linters for python are "Flake8" and "Pylama".
for testing purposes, you options vary based on the purpose of the app in development. it can be "PyTest" for general purpose apps, "Robot" for automation, "Selenium" for web apps, etc.
there many build tools for python as well. again, depending on your specific needs you have a variety of options. notable examples are "Paver", "SCons", "Fabricate", etc.

--> CI setup types:
your setup can be either self-hosted or cloud-based. apart from Jenkins, other self-hosted examples are "TeamCity", "Bamboo", and "Drone.io". other than GitHub Actions, other cloud-based solutions include "AWS CodePipeline", "GitLab", "CircleCI", and "Azure Pipelines".

--> self-hosting vs cloud-solutions:
choosing between these two methods can be decided based on complexity, hardware requirement, and amount of resources required by the app. as the mentioned criteria increase, our needs might be better answered by a self-hosting setup which comes at the cost of more configurations. but on the other hand, small project can utelize the little-to-zero configuration benefits of cloud solutions.