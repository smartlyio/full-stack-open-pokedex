The team is building a python application and uses poetry for package management. Version control is done via git. We Have branche labels: Dev, Staging and main. There is one staging, and one main branch. There can be numerous dev brances. The main branch is for continuous delivery. I.e. it is deployable at all times. Tests are run against this branch. The staging branch should be similar to the main branch and also be tested by the same suite of tests. The only difference should be that the deployment of the staging branch is to a site that is only known to organisation internal peers.(If the application is security critical, this deployment is to a local server not accessible from the internet). We work in 2 week sprints and ship a new version at least every 2 weeks. At the end of a sprint the staging branch is merged into main if all tests pass. Should not all test pass, problematic code is identified and fixed. If that is not possible, the corresponding commits are removed from staging ( and stored on a dev branch for future fixing). Yet something should be shipped every 2 weeks.

Work happens from dev branches. When developers tacke a new task (ticket) they create a new dev branch for it. Before mergin the dev branch into staging, the staging branch is merged into the dev branch. Now all merge conflicts that might occur occur on the dev branch and are solved there. All tests should also execute against the dev branch. The goal is to never have the staging branch break (and therefore never main).

We work with user personas and the jobs to be done framework. Every feature is characterised by a job to be done that displays who the feature is developed for, and what it should accomplish.

Pull request notes are written such that they have an abstract preface that can double as release notes. it is written high level without technical detals.

Discussion on details can happen afterwards.

Another developer must approve the pull request before merging dev to staging. New hires can only approve after probation (or with exemption). All developers (if availabel, i.e. not ill/on holiday) must sign off of the merge from staging to main.
