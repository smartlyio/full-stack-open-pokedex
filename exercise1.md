Building CI/CD pipeline for WordPress and language side PHP and HTML (sometimes JavaScript/CSS too).

When developing WordPress there are two different goals – as plugin or theme. Plugin is most times for admins (ex. editors) that brings new functionality (ex. new post type or form) and theme is how site looks and feels.

PHP is a back-end language run when requested and does not need built or compiled, that is done on request. Most common steps for WordPress CI/CD are:

- Installing all decencies: Mostly composer is used

- Linting: Done with WordPress Coding Standards

- Checking translations: WordPress has its own system to handle different translations. Different string can be collected from code and given to translators or for software to handle.

- Page Speed and other tests: Most of times CI/CD includes Page Speed test etc. Of course, code itself can also have tests. Most of time these tests need full running instance of WordPress (including SQL database and HTTP server top of PHP). This makes testing code for WordPress heavy and that is why it is clever idea to move that to CI/CD.

- Building/packing: When all linting and testing is done, we can remove unnecessary dependencies (aka. require-dev) and pack code to zip file.

- Deploying: This depends on how you have set up WordPress instance. Most common way to simply upload zip file to WordPress (simply using artifacts etc.). Second most common way is to use composer to handle WordPress instance ex. By Bedrock by Roots.

GitHub Actions and Jenkins are common choices, personally I have used a lot GitLab CI/CD. Since fully testing WordPress code is consuming of time and resources its cheaper to use your own hardware or VPS. Tools that you will use are open source, so it is your choice.
