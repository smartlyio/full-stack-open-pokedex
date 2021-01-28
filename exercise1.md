Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
### Tools
CI usually includes linting, testing, and building 
(some can be omitted in different cases).

Let's assume that the project is written with javascript,
and we have React on the front and Node.js in the back, and
we use TypeScript for better type handling.

Then, we can use _ESLint_ for linting, _Jest_ for testing and then
_Webpack_ will transpile TypeScript into pure JS.
This will stand for building.

### Alternatives to set up the CI

Besides Jenkins and GitHub Actions, we can use, for example,
CircleCI, TeamCity, GitLab and Azure. 


###Self-hosted or a cloud-based environment

Depends on a project size.

In general, for a small to medium software project that doesn't have any special requirements, a cloud-based solution is probably best.
(simple configuration and you don't need to go to the hassle or expense of setting up your own system, price).

For larger projects where more resources are needed, a self-hosted CI setup is probably the way to go.