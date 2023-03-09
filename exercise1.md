# Exercise1 answer
**Task:**
Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.

The points to discuss:
- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

**Answer:**
For the Python, there are many tools that can be used for common steps in CI.
Flake8 *combo-linter* combines multiple linters that check logical and stylistic errors. Beside using it in Jenkins or GitHub Actions, it is also possible to run checks in IDE.

ShiningPanda enables to *test* Python app on multiple versions of Python. 

Python does not require *building* tools (unless the app uses extensions that need to be compiled) as it is an interpreted language.

So far not mentioned tools for CI is TeamCity from JetBrains. The tool provides two option, it can be either hosted by JetBrains - in cloud, or another option is having it on premise - hosted by ourselves.

Both, self-hosted and cloud solutions have their pros and cons. In our case, assuming we would be working on a single relatively small app and only with six people with limited resources I would suggest a cheaper cloud hosted solution. This would save time and costs on more complex configuration needed for self-hosted solutions as well as it would minimized other problems with lack of technical support. The direct coust could be higher, but it would save costs on the need of running own server and the maintenance.
