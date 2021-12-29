# Exercise 11.1

Below is a discussion for an online store application written in Java.

### Linting, testing and building
Checkstyle is a popular Java linter and has received high ratings in the community because of its regular 
updates and detailed documentation. As mentioned in its documentation, Checkstyle can not only check coding styles but also help detect class 
and method design problems. Another option for Java linting is PMD. PMD emphasizes Java, 
but it also supports other languages, such as JavaScript, and therefore can be a feasible choice if there is a need to use the same linter for
forehand and backend code.

JUnit is a common framework for regression testing in Java. It has good support from the community as it has been
used for an extended period. Cucumber is a commonly used testing framework for Behaviour-Driven Development.

Gradle and Apache Maven are two popular Java build tools. A difference between Gradle and Maven is that Gradle is using groovy for
creating project structure while Maven is using XML. As a result, Gradle configurations may be easier to read than Maven ones. 

### CI setup
Other alternatives to set up CI includes Gitlab CI, CircleCI, TravisCI, and TeamCity, all of which are cloud-based.

### Self-hosting VS cloud-hosting
A cloud-based environment may be a better option for the application. First, as an online store application, the servers may face high traffic
in peak hours. A cloud environment is usually more scalable than a self-hosted environment. As a result, the application deployed in a 
cloud-based environment can react to high traffic quickly, while the application deployed in a self-hosted environment may be in danger of 
breakdown. Second, since a cloud environment is highly scalable, it is possible to scale down the necessary servers when traffic is low and
scale up the servers again when traffic becomes higher, so cloud-hosting can be cheaper than self-hosting, especially for small businesses.

It is necessary to consider the requirements of scalability, accessibility, and security when deciding between self-hosting and cloud-hosting. 
In the case of an online store application that requires high scalability and accessibility, cloud-hosting can be a more suitable option. However,
security in a cloud-based environment can be concerning if the cloud vendor does not conform to official information security and privacy policy.
If the application is a system that saves patient information, security must be a higher priority than scalability and accessibility. In this
case, a self-hosted environment is a better option. 
