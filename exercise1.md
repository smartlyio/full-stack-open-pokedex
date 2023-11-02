# Golf app with Python/Django

A small project for 6 programmers.

## Features

- Basic info of golf park

- Park type: 9-18 holes/range/minigolf/disc golf

- Scorecard

- Highscores

## Linter

Pylint for error and style linting.  
Has good documentation: [https://pylint.pycqa.org/](https://pylint.pycqa.org/)  

## Testing

Pytest - writing small and readable tests is easy, but can also scale up to  
test applications and libraries with complex functional tests.  

## Building

Buildmaster - can be run on-site or in private/public cloud, supports linux and  
windows, building and deploying from git, subversion or other source control,  
support for migrating from jenkins, teamcity or other ci servers.

  
## Alternatives for Jenkins and GitHub Actions

Travis CI - can be used with github, gitlab, bitbucket, perforce,  
apache subversion and assembla.  
  
Circle CI - support for multiple programming languages, automatic upgrades leads to  
easy maintainability, fast build times.  
  
Bamboo - simple configuration, can be hosted on-site or in the cloud,  
build process has great visibility.  
  
## Self-hosted or cloud based environment

For a small team i think a cloud based environment is better mostly due to costs.

### Availability

In the cloud the application is available from multiple locations if the team is not  
working in the same location. Self-hosted allows the team to better control who has  
access to the data if the application stores sensitive data, but cloud providers may  
use security measures that a small team can't afford.  

### Costs and scalability

In the beginning of a new application hosting it in the cloud should be cheaper than  
the cost of self-hosted due to not having to acquire server hardware etc. and the  
cloud provider takes care of maintenance and hardware malfunctions. If the application  
becomes successful transfering data and storing it in the cloud will raise costs. On  
the other hand self-hosting a successful application requires more hardware purchases  
and maintenance which will raise costs too.  

