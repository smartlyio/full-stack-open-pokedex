The common steps in a CI setup include linting, testing, and building. There are specific tools for each step in the ecosystem of different languages. For this exercise, I picked the Python language, which I want to research the specific tools for those three steps. 

There are many linter packages for checking either the logical or the stylistic mistakes from the code. For example, Pylint, PyFlakes, Pycodesstyle, are the single linter packages. There are also the combined linter packages, which already include the multiple linters, e.g., Flake8 and Pylama [1]. We can freely choose the single linter packages depending on the purposes. Or we can directly use a combined linter package, if it includes everything we want.

There are plenty of testing tools for python programming: Python Robot Framework,  PyTest, Python Gauge, Python Locust, Python RedwoodHQ, apycot, and so on. Each tool has its advantages and disadvantages. For  example, Python Robot Framework is easier for beginners to test automation than PyTest, and it also is highly extensible, but it does have parallel testing built-in [2]. So we can search for more information about the testing tool before making the decision.  It is also a good idea to write down our own experience for each tool we used, the cons and pros. 

The building tools for the python language, I found some, e.g., PyBuilder, SCons or doit [3]. But it probably needs more research before making a choice.

Except Jenkins and GitHub Actions, there are some other choices to set up CI, e.g., Circle CI, GitLab, and AWS.

It depends on many things to decide whether to use a self-hosted or cloud-based environment to set up CI/CD. For example, the size of the project, any special requirements for running the project [4], the knowledge of hardware and software infrastructure management and maintenance, the time and money we want to expense for those management and maintenance, the scalability of service, the security issue [5].



Reference:
1. https://realpython.com/python-code-quality/#linters
2. https://www.eswcompany.com/python-test-tools-should-you-be-using/
3. https://wiki.python.org/moin/ConfigurationAndBuildTools
4. https://fullstackopen.com/en/part11/introduction_to_ci_cd#types-of-ci-setup
5. https://jaychapel.medium.com/how-to-decide-between-a-ci-cd-saas-tool-vs-self-hosted-16dcef8590a,
   https://www.bitrise.io/comparing-cloud-based-and-self-hosted-ci-cd-solutions,
   https://www.digitalocean.com/community/tutorials/ci-cd-comparison-using-managed-providers-vs-self-hosting