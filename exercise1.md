
First, we will try to use the same operating system, preferably Ubuntu 16.4, where we'll install the packages.

After that, we will establish some general rules for coding. For example, at the stylistic part - to use just double quotes, or to indent some comments, etc.

I will try to look up after some package who sends us automatic feedback if some rules were broken.

Every person will work on one feature at a time, each one in a different branch.

Also, every team member will add or improve the main file, by making a pull request. 

Before the team starts to code or commit for each of these features, it is required them to run a git pull command, to have the main branch update to the newest commit. 

Also. they will create tests for each function they writes. Before making every commit, they will run these tests.

By using pull request and often running the git pull command, the team will solve the problem of merge conflicts.

If we write the application in a high level language which requires transpilling before it is running, we will 'build' this code, aka transform the code into a low level language, which will be compiled/run on the platform.

We will evaluate at the beginning how big this project will be. If it will be a small or medium one (without a special graphics or other high computationally specs.), we will use Git Actions, saving time with a simpler config or settings.

If our project will use more than 14 GB of SSD disk space, 2 core CPU, 8 GB RAM or if it will often imply the GPU usage, we will be “forced” to use Jenkins, instead of a cloud-base solution like Git Actions.