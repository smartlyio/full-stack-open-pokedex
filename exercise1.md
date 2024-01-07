### No.1

    in python ,
    for testing , there are options. pytest is a popular testing framework
    unittest in junit of java style is another option
    for linting, pylint is widely used for checking the python code against coding standards and
    conventions.
    although not a linting tool, but Black is a popular code formatter that automatically reformats
    the code to adhere to standards.
    while python apps dont have a build steps necessarily, for building a package i'd say pip (?)

### No.2

    Gitlab CI/CD
    Azure pipeline
    Travis CI
    Circle CI
    ..

### No.3

    as mentioned in material , for the small to medium projects the better option would be
    a cloud-hosted solution (github actions here), however this was the only option i had
    as i don't have the physical server at my disposal at the time of doing this to have a
    self-hosted server, and even if i did, the configuration of Jenkins was'nt the thing i
    would have do. too much work where in github actions everything is ready.
    However, there are so many things to consider , and both self-hosted and cloud-hosted
    solutions got their advantages and disadvantages, but because of lack of infrastructure
    and the knowledge to configure a self-hosted automation server, the right better option
    is the cloud-hosted.
