Language picked: Python
Type of project: Forensics of GPU market prices
Replicated from here: https://realpython.com/python-continuous-integration/
Initial steps:
•	Set up the working environment with “python3 -m venv forensicgpu“ 
•	Activate that environment wth “. forensicgpu /bin/activate”
•	Write some code and commit the basic changes

•	For linting you can use flake8 and run it with flake8 --statistics
•	For unit testing you can use pytest and you can run in with pytest
•	For test coverage you can use pytest-cov and run it with pytest-cov -v --cov
•	Commit the changes
•	You can use CircleCI with Github as your continuous integration pipeline
•	For containers and images you can use docker as Python can be easily plugged to it
Source: https://www.katalon.com/resources-center/blog/ci-cd-tools/
Apart from the mentioned CircleCI it is possible to use: TeamCity, Bamboo, Gitlab, Buddy, Travis CI, Codeship, GoCD, Wercker. However, many of these seemed to be used for more specialized projects or have better compatibilities with other softwares such as Docker or AWS.
Given that the project does not require much of a specialized equipment, it would be more beneficial to use a cloud-based environment. However, if, for example, the project would use some of the deep learning methods for the neural networks, then most probably a self-hosted could be the better option as it could require more of the specialized equipment.
 
