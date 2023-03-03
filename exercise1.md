Common steps in a CI setup for Python? 
- Linting with pylint tool
- Testing with pytest library, which can handle unit and integration tests!
If I'm working with multiple languages I may have to do some transpiling in between.
I usually use Github Actions with my python scripts to install all required libraries, then lint the code, run all tests and make sure they pass, then run the desired program. I print the console output to Github actions so I can review output messages along with the status of the run. 

Travis is an option for CI, but it is commercial, whereas Jenkins is open source. You probably wouldn't have sufficient budget to purchase travel with such an early, small team.

This team's setup would be better in a cloud-based environment since the team is small and you are prioritizing releasing an MVP. Later, as the product and team grow, you can shift to a self-hosted CI setup. It's nice too to have all the code and CI process in one place for an early project. Need a way to protect the file that runs the CI process so it isn't accidentally deleted. There are some better permissions in Jenkins.


