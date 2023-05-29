1. CI practices with Python language applications
1a. code programming and editing phase: 
  - I would select VS Studio with Pylint extension
  - another option for editing could be, for example, PyCharm (with Pylint extension)
1b. lint phase:
  - if needed, it is also possible to use Pylint as command-line tool ("example: pylint filename.py")  
1c. building phase
  - building phase is not needed with Python application, since Python code is not compliled, but interpreted as such
1d. testing phase (automated testing)
  - there are several testing frameworks for Python, for example: Robot, PyTest, Unittest, Doctest, Nose2, Testify
  - I would select Robot for both Unit testing and Acceptance testing 
  - Also in case of Test Driven Development, Robot would be the most natural choice

2. Tools for CI with Python (alternatives for Jenkins and GitHub actions)
The CI tools are generic and there is no dedicated CI tool for Python environment.
Typically, each organization uses only one generic CI tool for all purposes (for all languages). 
Besides Jenkins, there are several options for CI server:
   - Go CD 
   - Bazel  
   - BuildBot 
   - TeamCity 
If Jenkins would not be available, I would select BuildBot, which is written in Python.


3. CI: self-hosted vs cloud-based solution
I would select cloud-based CI system, since setup of the CI system is fast and I do not need to take care of hardware.
In addition, cloud-based configuration is easier.
However, if there is need for special hardware in the testing (e.g. graphics processor), self-hosted CI system could be a reasonable choice.
Also, if there is a need for high-performance CI system, self-hosted CI could be the choice, because You can decide freely to add more resources to CI
system depending on your current needs.

