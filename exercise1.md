## Exercise 11.1

Language chosen: **Python**

As Python is an _interpreted_ language, there is no compiling involved in the building process. However, when external
packages are used and imported as modules, there is a need to describe what the dependencies are. The common way is to
set up a virtual environment and install the packages from a list in a file. The developer creates this file with the command `pip freeze > requirements.txt`. This is similar to the Javascript NPM and package.json way.

In python, a virtual environment can be set up with the command `python3 -m venv venv` and then activating it with
`source venv/bin/activate`. After that, the required packages are installed (normally using a file called requirements.txt) with
the command `pip install -r requirements.txt`. Now one should have a working environment with all the necessary packages required
for the software to run. In Javascript/Node world, the before mentioned process is taken care of with `npm install`.

For linting, the package `flake8` is used. This package checks that the code conforms to the PEP-8 coding standard.

For testing, the de facto testing library is `pytest`. Code coverage can be obtained with `pytest-cov`.
Unit tests are written using the filename prefix `test_`, so if the file tested is `myawesomething.py`, then the tests should reside in the same directory in the file `test_myawesomething.py`.

If not using Jenkins or GitHub Actions, one could use CircleCI, which has a free tier. CircleCI runs in the cloud. If the code is
confidential and cannot be sent off-premises for CI, then CircleCI can also be self-hosted.
