# Exercise 11.1


* Some common steps in a CI setup include linting, testing, and building. 
What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
* What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
* Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

The project is written on Ruby. There are few Ruby specific software needed. This project could be a web app made with the framework Ruby on Rails.
Instead of the default testing library we could use a program called rspec. Linting can be done with rubocop and building is not needed as Ruby is
an interpreted language. All of the packages can be easily installed as "gems" with `gem` or `bundle`. The static assets need to be compiled and code minified before
publishing and that can be done with Gulp.

There are for example the alternative to Github Actions provided by GitLab CI/CD. Similar to those there are many cloud-based providers like Azure pipelines and AWS CI/CD pipeline. 
On the self-hosting front there is for example Ctfreak or CircleCI.

As Ruby is interpreted and would not require that much special configuration, the cloud-based CI could prove to be beneficial. We wouldn't benefit that much from the self-hosted
route compared to the cloud-based pipeline but we could (would) suffer from the eventual failures and such. As the CI pipeline would not need to be so complex, the project could be
using for example Github Actions as it is simple to use and easily integrated to the workflow as Github is used by most developers already.
