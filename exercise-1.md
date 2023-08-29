<!-- @format -->

## Exercise 01

Specific tools for taking care of _linting_, _testing_, and \_building_in python base project

Linting: [Pylint](https://pylint.org/), [flake8](https://github.com/pycqa/flake8)
Testing: [pytest](https://docs.pytest.org/en/7.4.x/contents.html), [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)
Building: [setuptools](https://github.com/pypa/setuptools),, [twine](https://twine.readthedocs.io/en/stable/)

---

Alternatives to Jenkins and GitHub Actions:

- [Travis CI](https://www.travis-ci.com/)
- [CircleCI](https://circleci.com/)
- [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines/)
- [GitLab CI](https://about.gitlab.com/)

---

Whether self-hosted or cloud is better depends on several factors:

- Cost: Cloud services charge per usage, self-hosted has upfront infrastructure costs
- Customization: Self-hosted allows more customization, cloud uses pre-built environments
- Scalability: Cloud services scale easier to handle spikes in demand
- Security: Self-hosted gives more control over security environment
- Maintenance: Cloud services are maintained by the provider, self-hosted requires own maintenance

---

Information needed to choose CI:

- Workflow complexity - is advanced config needed?
- Traffic volume - are spikes in demand expected?
- Security requirements - any regulatory or IP protection needs?
- Available expertise - can team manage self-hosted env?
- Budget - are cloud costs acceptable?
