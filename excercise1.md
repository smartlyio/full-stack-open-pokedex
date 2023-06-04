Let's dive into a hypothetical situation where a team of around 6 awesome people is working on an application that's going to be released soon. For this scenario, let's say they're coding the app in Python. When it comes to setting up CI, there are some common steps we need to take care of, like linting, testing, and building.  

First up, for linting, we've got Pylint and Flake8. Pylint helps us catch errors, enforce coding conventions, and gives suggestions to make our code even better. Flake8 combines multiple tools and looks out for errors, style violations, and complexity. 

Next, in testing Python has got us covered with its built-in unittest module. It's great for writing and running tests. But if we want something more powerful and flexible, we can use PyTest. It can do some cool stuff like automatically discovering tests and giving us awesome assertion capabilities. 

Lastly, building. To package and distribute our Python app, we've got tools like setuptools and Poetry. They help us manage dependencies, package our app nicely, and create distributable artifacts like wheels or source distributions. 

Besides Jenkins and GitHub Actions, there are some other alternatives for setting up CI. One option is Travis CI, a cloud-based platform that plays well with Python and integrates smoothly with GitHub. Another option is CircleCI, another cloud-based platform that supports Python and offers flexible configuration options. Also, GitLab CI/CD is worth considering. You can either self-host it or go for the cloud-based version.  

When it comes to choosing between a self-hosted or cloud-based environment, it depends on factors like team size, budget, and scalability needs. Self-hosted gives you more control, but it requires maintenance and might be less scalable. Cloud-based setups are super convenient, scalable, but may involve some costs. 