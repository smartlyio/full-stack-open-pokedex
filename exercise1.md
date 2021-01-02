## Exercise 1

* Assuming a Python ecosystem, we could use flake8 or Pylint for linting and pytest for testing, and we would not literally "build" our application, as Python is an interpreted language. We could also use other tools, such as mypy for type checking.

* As alternatives to Jenkins and GitHub Actions, we could use tools such as Travis-CI, CircleCI, BuildKite, Azure Pipelines or GitLab.

* With a small team of around 6 people, a cloud-based solution would be better, as it would eliminate the need to administer the server system (something with would most likely require experts and would be more expensive for small scale projects). This is made worse by the fact that the project is already in the final stages of development, so integrating a hard and slow to setup system would be counterproductive. Of course, the value of self-hosted solutions increases over time, and with the application about to be released, just paying a cloud-based solution and letting the cloud provider handle all the system administration is almost certainly a much better value, unless extensive, long-term post-release development is expected.

To determine which solution would better suit our project, we would need to evaluate the project requirements (will it need finely optimised performance? Will it require downtime? Does it need to be implemented quickly? Will it need extensive post-release maintenance? Will it need a powerful server with plenty of storage?...) and check the costs (monthly service fees, cost of hiring system administrators and IT personnel to maintain a server, etc).