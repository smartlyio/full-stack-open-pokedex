# CI/CD in Python

I chose Python for this exercise since I haven’t used it that much and wanted to learn new things. I did a small CI/CD tutorial for python that I found on the internet (https://realpython.com/python-continuous-integration/). 
Python is an interpreted language so building the program doesn’t involve compiling, but rather running tests etc.. Dependencies are written in requirements.txt (when using pip) so that all the packages that are needed are installed during the build process (pip install). After installing the packages tests and linter can be run. 

Flake8 or Pylama are widely used combo-linters which consist of multiple linters packaged together. For my CI/CD tutorial I used Flake8. Python’s standard test library is unittest. Other test runners are Pytest and Nose. I chose to use pytest in my project. 
You can get code coverage with Pytest-cov which is a pytest extension. 

Besides GitHub actions it is possible to use CircleCI. Both have a free tier and have the same basic functionality. CircleCI is a cloud-based solution and it was very easy and simple to set up. My project was so small that CircleCI was well suited for me. 

For packaging I rearranged the files according to a tutorial (​​https://realpython.com/python-application-layouts/). I used the instructions in  https://packaging.python.org/en/latest/tutorials/packaging-projects/ for packaging and uploading the distribution archives to TestPypi. Then I modified my CircleCI config to automate the packaging and uploading to TestPypi. For a successful upload the version number needs to be updated in the pyproject.toml file. 

The project can be seen in https://github.com/TuuliTG/CalculatorLibrary
