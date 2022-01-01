# Warming up

This is an answer for exercise 11.01.

I picked Python because in addition to JavaScript, it is a programming language that interests me the most. Working with Python one could use the following tools to accomplish certain CI tasks mentioned in the exercise: **pylint** for linting, **pytest** for testing and **pybuilder** for building. Other options are available of course - for example **unittest** or **nose2** for testing instead of **pytest**.

What comes to CI alternatives for **Jenkins** and **GitHub**, one can use **GitLab** or **Buddy** for example. Also **Heroku** offers some built-in CI tools for deploying code straigt from GitHub repository into Heroku.

With lack of experience on self-hosting I would count on some cloud-based environment. **AWS** would probably be my first pick as I already have some experience with it and it also offers good built-in features. To make a decision of this kind, we should know more about technical details and requirements of the application. Usually self-hosting seems to be more expensive (equipment, internet bandwith, supervision) and time consuming compared to cloud-hosting. It also requires some earlier knowledge of the topic. On the other hand cloud-hosting is easier, faster and cheaper to setup, easier to "end" as it doesn't need physical equipment. Cloud company also takes care of supervision, overall facility cost etc.
