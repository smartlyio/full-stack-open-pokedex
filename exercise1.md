# Python project

# Linting

For code linting I'd use pylint, it can handle logical and statistical linting. Also it can be integrated within the project requirements since it's a python package.

## Testing

In order to do testing in python i'd either use unittest or pytest, now pytest is preferred since it makes easy to write small, readable tests. The targed would be to implement tests for every function, method and class so that behaviour is always expected.

## Building

Ir order to build in python and maintain a project correct enviroment with dependencies id use pip freeze to a file to have a list of requirements for the app to run, also id provide example .env files and keep enviroment variables that way.

## CI Setup

Some popular choices for this task are circleci or GitLabCI/CD, both provide you with CI/CD pipeline building tools, in gitlab's case it's integrated with their version control system.

## Hosting

I'd rather use a cloud solution for hosting the project, there's plenty of free tier services for personal projects or even some small business solutions, nevertheless for bigger projects there's even scaling options and security solutions, I personally prefer heroku as it has comprehensible documentation and excellent guides.


