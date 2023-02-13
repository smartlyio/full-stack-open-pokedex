# Our Python Toolbox

## 1. Testing Tools
- **pytest:** Pytest is a very easy to use and Pythonic testing library for Python projects. It can be easily installed into a pip or conda environment, and requires very little extra code to start working. Pytest is also very flexible and can handle most testing requirements you could need, which makes it a great tool for new and experienced Python users alike; it also is well suited to grow with projects that start small and scale quickly.

- **codecov:** Codecov, which stands for “code coverage”, is a framework that keeps track of the percentage of lines of your code that are executed by your unit tests. This helps give you an understanding of where you are testing and most importantly where your testing is lacking. It is easy to install and pairs well with pytest, so using it is a no brainer!

## 2. Linting Tools
- **flake8**
- **black**
- **pre-commit**

Since we want to run flake8 and black each time we commit new code, we will take advantage of another framework called pre-commit, which allows us to specify an array of different tasks that we want performed any time we try to commit new code; if the tasks pass, then we can commit, if they fail then we must address them before committing.

In order to use pre-commit, we simply need to create a .pre-commit-config.yaml file and specify the desired hooks.

## 3. Continuous Integration Tools
- **Travis-CI (cloud-based environment)**

Travis-CI is CI service to teach to programmers who work with open source software because it is very well designed, free for open source projects, and easy to learn how to use while still having a high ceiling of potential customization. You can run the most basic pytest testing suite in Travis or you can build software in multiple OS’s and automatically deploy your code to several sources when it’s done. Many other open source projects make use of Travis as well, which means there are many examples out there to look at when customizing further.

Travis enables a great workflow when combined with the other tools mentioned because it allows you to automate testing and deployment of your code, which removes quite a few steps to maintaining Python packages.

# Tool Wrap Up: 
To show you the flow, let’s look at the steps:

![](https://www.earthdatascience.org/images/blog/2019-11-26-unit-testing-linting-ci-python/workflow-unit-testing-linting-ci-python.jpg)

_You can integrate tools for testing, linting, and continuous integration into one workflow._