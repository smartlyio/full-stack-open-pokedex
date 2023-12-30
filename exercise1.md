This is the setup: a team of 9 developers working on a company finance department business intelligence solution. The data is in an Azure data lake and it is presented to business users through a Power BI dashboard. The back-end work is done in Azure Synapse notebooks with python. 

pylint is a python static code analyzer helping to maintain code quality through standard formatting plus other checks. Regular jupyter .ipynb notebooks can be converted to .py files with 

> jupyter-nbconvert --to script spark.ipynb

and then checked with

> pylint spark.py

The installation of pylint is done with

> pip install pylint

Other linting options include pyflakes, McCabe and pycodestyle.

There are several options for python unit testing: unittest, PyTest and doctest. The team is already familiar with unittest so that is a good option to use. Unittest is taken into use with statement

import unittest

at the beginning of the test notebook cells. Tests can also be run from command line:

> python -m unittest test_module1 test_module2
> python -m unittest test_module.TestClass
> python -m unittest test_module.TestClass.test_method

(Examples taken from unittest documentation https://docs.python.org/3/library/unittest.html)

Python code does not require a build step for pyhton code.

When the infrastructure is already running in Azure, the easiest options for CI activities are GitHub Actions and Azure DevOps.

The choice between self-hosted environment and Azure comes down to cost and convenience. 