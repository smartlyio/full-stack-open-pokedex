In my hypothetical situation our team is building an application using Python. Linting and testing are common steps in a CI setup and there are many tools for these steps in the Python world.

One of the most used linters for Python is Pylint. Other options are for example flake8 and Bandit. Some linters are more specialized in finding certain types of bugs and others are for more general use. 

There are also several options for choosing a testing framework. Some of them are for example unittest, PyTest and Robot. Much like linters, testing frameworks have some differences and it usually depends on the context which one is the right choice.

In the first part of the course material discussing CI/CD -tools, only Jenkins and GitHub actions were mentioned. However, several viable alternatives for these two exist. For example, Amazon has its own cloud-based tool called AWS CodePipeline. This would obviously be a good and compatible candidate if other AWS-components are participating in the application. Other alternatives are for example Atlassian Bamboo and JetBrains TeamCity.

As discussed in the course material, there are pros and cons with both self-hosted and cloud-based CI/CD environments. Assuming there’s about six people working on the project, the project probably isn’t massive. This already means that cloud-based environment is a valid candidate. However, when making the final decision, certain details such as hardware requirements would have to be taken into account. 
