Let's assume a team of 6 people working on an application that is coded with 
Python.

It is easy to find Python tools for executing some of the basic steps 
of CI. For example, there is pylint in 
Visual Studio for avoiding problems related to syntax and style in Python 
code. For testing, there is unittest that is both a testing framework 
and a test runner and is included in the Python's standard library. If the 
project requires very extensive testing, there are other tools such 
as nose2 or pytest that can make running and managing a large number of 
tests easier. As Python is an interpreted language, no build step is really 
required.

There are many alternatives to Jenkins and GitHub Actions for setting up. 
If the team is already using Jira and BitBucket, it could make 
sense to choose Bamboo which is another Atlassian product. Another option 
could be CircleCI which has been around for good ten years and appears 
to be one the most popular CI/CD platforms in the world. The team is quite 
small so they should seriously consider choosing a cloud-based solution 
because that would make CI/CD easier and thus save the team's time and 
effort for designing and coding the product. However, if the project will 
need a lot of resources or has some particularly strict requirements related 
to security, for example, Jenkins or some other self-hosted option could be 
a better choice.  
 
