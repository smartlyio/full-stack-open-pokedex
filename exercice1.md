# Solution exercise 11.1

- `Python` app. Linting will be done with `pylint` or `flake8`. For unit and integration tests, `pytest` will be used. Before merging a branch into main/master the code will be linted and tested with the mentioned tools. Only if tests pass, the branch will be merged. A docker container can be created of the app, which you can automatically deploy, using GitHub Actions for example.

- Alternatives for setting up CI:

    - Travis CI
    - Circle CI
    - Gitlab CI
    - Azure Pipelines

- Self-hosted vs cloud-based environment: <br>
  To answer the question if this setup would be better of in a self-hosted or a cloud-based environment, we should know if the app is a small or large project, if the app needs special resources, like a graphics card, if there need to be setup special tasks in the CI pipeline, and if the app is developed in a big company. <br>
  If the app is a small project, developed by a small company, and has no special requirements, than a cloud-based solution would be a great fit. There is no need to spent time and money on setting up a server with a complicated CI configuration. On the other hand, if this app is developed by a big company where other teams are already using Jenkins, and the app requires special resources, self-hosted would be the way to go. Billing costs can be a factor too. For self-hosted environments the cost depend on the server, while for cloud-based solutions the cost depend on build time.
