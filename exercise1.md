1. Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? 
    For our React/Node project we should be using eslint for linting (run with the command npm run eslint which runs eslint for the js/jsx files using the config set in .eslintrc.js);
    We will also use jest for testing for jsx written tests in test directory;
    We will build the project  with npm run build which uses webpack (webpack --mode production);
2. What alternatives are there to set up the CI besides Jenkins and GitHub Actions? 
    A similar Jenkins alternative but opensource is Travis CI (The service includes features like built-in Docker support, build matrices for parallel testing, and add-ons for tasks like headless testing with browsers. Travis CI offers an intuitive UX, but it also supports pipeline-as-a-code using YAML.);
    Also BitBucket and GitLab use Pipelinesfor automating the processes;
3. Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
    For this project which is small and doesn't have any special requirements a cloud-based solution is probably best. We should use GitHub Actions as the configuration is simple and should also be cheaper;
    