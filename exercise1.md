## 11.1 Warming up
Language: Python

_Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google_.

-Two popular choices for carrying out linting on Python code are **Flake8** and **Pylama**. **Flake8** is capable of performing both stylistic and logical lint, meaning it can enforce coding standards and help prevent undesirable outcomes. Regarding testing, the most-widely popular option is **PyTest** which allows for creating simple unit tests, as well as complex functional testing. For building **PyBuilder** can be used.

_What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!_

-Besides Jenkins and Github Actions we also have CircleCI and Gitlab. CircleCI allows automation across the user’s pipeline, from code building, testing to deployment. Gitlab, on the other hand is a tools suite which allos to trigger builds, run test and deploy code with each commit or push.

_Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?_

From my research I found out Python is an interpreted language, so there's no need for a build step in our CI system. However, there is more information we would need to make a decision as to which CI system type is better. For instance, we should know how big the software project is and if there are multiple developers working on the same or multiple projects. For small to medium-sized projects is better to choose third-party cloud-based service providers, whereas for bigger projects having a self-hosted server is recommended.