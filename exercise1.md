# Exercise 1 

## Language of choice: Python

#### Tools:
* Some linting recommendations include pylint and pep8. Pylint appears quite stringent, but also helpful in many cases, to avoid coding mistakes. Pep8 mostly focuses on maintaining properly styled code.
* Python has in-built unit testing library unittest. A popular alternative is pytest.
* Python is an interpreted language, hence no build is needed.

#### CI Tools:
* Self-hosted CI tools include Buildbot and tox. Jenkins can also be used here.
* Cloud solutions include for example Travis CI, CodeShip and Semaphore. Of course, Github actions is also an option.

#### CI selection

CI selection depends on a multitude of considerations. Without diving too deep into technicalities, both on- and offline solutions seem capable of doing most common tasks.
That being said, offline solutions should generally allow for more customizability and control. Generally, the added freedom comes with added responsibilities - when using
offline solutions, information security is for example a consideration, especially if teams connect to the "offline" service. Generally, online providers have such concerns
covered. Prices are also a consideration; costs largely depend on utilization and complexity of applications, as well as already available computational resources. The amount
of work needed to maintain different solutions should also be considered. Overall, there is no one clear winner as it largely depends on the situation.
