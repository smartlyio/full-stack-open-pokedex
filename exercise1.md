# Exercise 1

### Case

Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

Let us assume that the application is coded with some other language than JavaScript/TypeScript, e.g. in Python, Java, or Ruby.

### The following text will answer these questions:

a) What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
b) Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

## Answer

a)  
One way to build up your CI system is via Amazon Web Services. You can use a Github or similar version control website like Gitlab to store your source code. After that you can mirror that particular repository to the AWS. Keep in mind that AWS requires a lot of preliminary configurations with user management, administrational settings and environmental setups. AWS provides a large amount of different CI/CD solutions for the development team to choose from.

Another way could be to setup your CI environment to ready to go CI platform like Travis CI and setup your application pipeline from there. You could produce a docker container and serve it to the Travis CI pipeline.

b)  
Based on the initial information it's hard to know which one of the given environments would fit better to the team's workflow. I would have to know the potential scaling of the team and the application first. If the application remains small in size and the team memebers are happy with "normal configurations" then I'd suggest them to choose the cloud-based environment.

On the other hand if the members of the team wanted to produce some sort of unique CI system, the application was a part of some bigger system or they wanted to scale the application rapidly I'd recommend the self-hosted environment solution.
