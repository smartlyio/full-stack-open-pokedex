# 11.1 Warming up

Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
+ linting can be done using eslint
+ testing can be done using jest and cypress
+ building can be done using webpack or the buildin function from create-react-app

What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
+ Bitbucket Pipelines
+ AWS CodePipeline
+ Azure Pipelines
+ GitLab
+ Atlanssian Bamboo
Each major cloud platform has their own version of CI tools. THey might have their own business purposes but it feels like reinventing wheels.

Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

For small projects, a cloud-based environment is probably a better choice. 
+ Every developer already uses Github anyway. Checkings can be done at the same time when PR happens.
+ Github action is not too hard to learn. 
+ No need for someone to look after Jenkins.

Test version number from branch