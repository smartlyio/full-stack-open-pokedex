# Exercise 1

For this hypothetical scenario we’ll be using Python. 

### Linting, testing and building

A popular and well working linting solution for Python is Pylint. It includes a fairly good setup straight from the can, gives clear directions regarding errors and their location, and it even scores your code.

For testing “unittest” and PyTest would be good candidates. The latter is part of Python’s standard libraries, so it’s ready to go. As the name would suggest, unittest is focused on unit testing and might not hold up in more comprehensive test scenarios. 

As an interpreted language, Python doesn’t need a build step at all. However, Python does have a a library calld “build”, which creates a distribution ready package – this might be something the project might want to utilise.

### CI solutions

If a small change from GitHub is desired, a good solution might be GitLab. It functions very much like GitHub, but is more localised for your own project(s). Another (Google) recommended solution is Bamboo. It is created by Atlassian, so my assumption is that it might be geared for bit bigger projects than this one.

### Self-hosted or cloud-based

This seems like a fairly small project, so initially cloud-based CI sounds like the better option. A self-hosted environment would probably require considerable effort from at least one of the team members – reducing functional output by 17 %. What might change this assumption is if there is a ready self-hosted solution already – maybe our team of 6 is just a part of a bigger department? Also such a small team should consider if there already exists knowledge on any kind solution within the team; a small team shouldn’t waste resources on learning something completely new if it can be avoided without compromising quality.
