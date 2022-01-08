## Exercise 11.1

### CI in Python

### Tooling

#### Linters

There are both stand-alone linters, and linters that are packaged together into one. Packaged linters consist of linters in different categories - logical, stylistic, analytical, code formatters.

- **Pylint** - checks for errors and enforces a coding style, slow and requires configuration
- **pycodestyle** - purely stylistic linter that checks agains pep8 conventions
- **PyFlakes** - checks for errors but doesn't enforce a coding style, very fast

#### Testing

Unit tests test single components. Integrations tests test multiple components at the same time and how they interact with each other.

- **unittest** - built in library, it contains a testing framework and a test runner
- **nose** - compatible with tests written using the `unittest` framework, and tests can be run with the `unittest` test runner, `nose2` fork is more widely adopted
- **pytest** - can execute `unittest` test cases, but the advantage comse from writing tests as functions in any file that starts with `test_`, and using the built in `assert`

#### Building

Python projects make use of virtual environments and `requirements.txt` in order to track required packages. Placing an `__init__.py` file inside a folder will cause Python to treat it as a module.

### CI Setup alternatives

- Gitlab CI
- CircleCI
- TeamCity
- Bamboo

### Setup

Picking up the right CI setup depends largely on the size of the project and its requrements complexity. CircleCI, with its cloud-based environment, is a viable solution for a Python application, because of the simple build proccess and the lack of any special requirements.  