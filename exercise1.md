First of all we want to lint our code and keep it clean, maintainable and as readable as possible. For Python, we could use `Pylint`, `Flake8` or `Pyright`.

To test it, we can use `unittest` or `pytest`. These will allow us to set up unit tests for our application and make sure anything pushed to main does everything we want it to do.
We don't need to build the project as Python is interpreted, we won't be pushing it to PyPI or anything and we don't need to compile it so our server can run it.

We will probably use Github Actions as that is a good cloud based environment. If we wanted to self host it we would use Jenkins. Some other alternatives are GitLab CI, Azure Pipelines and CircleCI.

Since we have a small team of only 6 people and the app isn't huge, we will use a cloud based environment over a self hosted one at least for now, as we don't have any special requirements like a GPU and the tasks and tests are quite basic and not resource intensive. If the app becomes very popular and we need to scale up then we can always move to a self hosted one.
