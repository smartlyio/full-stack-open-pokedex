# Testing, Linting and Continuous Integration in Python Projects

## Testing

Pytest is an extremely user-friendly and pythonic testing library for Python applications. It only needs a small amount of additional code to start functioning and is simple to install into a pip or conda environment.

Codecov, short for "code coverage," is a system that tracks the proportion of your code that is run by your unit tests. This makes it easier for you to comprehend where you are testing and, more significantly, where your testing is deficient.

## Linting

Because we want to run flake8 and black every time we commit new code, we'll use another framework called pre-commit, which allows us to specify an array of different tasks that we want performed every time we try to commit new code; if the tasks pass, we can commit; if they fail, we must address them before we commit.

## Continuous Integration

The customization possibilities for Travis-CI are very broad, it is free for open source applications, and it is simple to use. Travis allows you to perform the most basic versions of the Pytest testing suite as well as build software across multiple operating systems and automatically distribute it to a number of sources once it is complete.
