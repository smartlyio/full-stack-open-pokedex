Let's say the application is built using Python. For the CI setup I would recommend the following tools based on their popularity, documentation and ease of use.

[Pylint](https://pypi.org/project/pylint/) would be used for scanning python based projects and helping to identify improvements. It scales well since it is possible to write custom plugins.

With [Pytest](https://docs.pytest.org/en/7.3.x/) you can write small, readable tests. It can also scale to support complex functional testing for applications and libraries.

[PyBuilder](https://pybuilder.io/) would be the third recommendation since it's an easy-to-use build automation tool for Python, it emphasizes simplicity.

Alternatives for Github Actions are [Travis CI](https://www.travis-ci.com/), an open source continuous intergration service that works with GitHub, Bitbucket, GitLab and more. Another popular alternative is [CircleCI](https://circleci.com/)

When chosing the type of hosting one of most important things to consider is security. Using a cloud-based service means that all data and security is outsourced. If working for a client with sensitive data then a self-hosted option might be more advisable. On the other hand this means that the responsibility of security would be yours. And you might need to hire security experts which would lead to higher costs. However if the projects aren't too sensitive then using a cloud-based option would be the easiest and most time-effective.
