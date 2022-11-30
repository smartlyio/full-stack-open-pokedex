I selected Java as a programming language with NetBeans as an IDE. Free IDESs as NetBeans and Eclipse work fine with strongly typed Java, so I think it does mainly the part for linting. While NetBeans is an integrated IDE with debugger and all kind of plugins it does also the compiling.

Using Junit testing as part of Test Driven Development with stubs and drivers with the help of Selenium for webpages, would be my choice. Clean Code is also vital, everyone on the developing team should work according to the principles.

How mane branches and packages company should have depends on different things e.g. company size, how many product lines etc. Thinking about a small software development company should have at least three (3) branches, I think. The Master Branch, Test Branch and Development Branch, besides these the technique in use how to use CI/CD pipeline to take tested and approved code from master to production.

As Docker Containers and orchestrating with Kubernetes have been evolving to be the main architectures used with CI/CD I would choose them. I though used a continuous Circle CI/CD Pipeline with Docker/Heroku and liked it, so I would choose Circle CI. 

Though this setup would be cloud-based as Jenkins, but to my own small experience with Jenkins, Circle is more user friendly and their advertise the easy use Kubernetes services 

The main issue here is the use of Kubernetes because I don’t know that – what I know is that it’s quite complex. Well, the smallest software apps could still work without Kubernetes but anyways, if company should use containers, then the pipeline should also handle Kubernetes. 

CircleCI has Build continuous integration and delivery pipelines to Kubernetes with CircleCI. CircleCI uses orbs, packages of parameterized CircleCI configuration defining reusable commands, executors, and jobs.
