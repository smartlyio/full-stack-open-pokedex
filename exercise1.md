# Chosen Language: Rust

### **Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.**

- Linting: Clippy (https://github.com/rust-lang/rust-clippy) offers a wide range of linters to choose from depending on your needs/preferences.

- Testing: Cargo test is Rust's default testing system, offering many options for different testing needs. 

- Build: Cargo build is Rust's default build system. You only need to use a single command to create the executable for any OS.

### **What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!**

There are many options, some of them are:

- TravisCI: Cloud solution, very easy to get started with.
- GitLab: It offers a modern UX with container support. Can be used on-prem or on the cloud. 
- CircleCI: Can be used on-prem or on the cloud.
- AWS CodePipeline: Native CI tool for AWS cloud.
- Azure Pipelines: Native CI tool for Azure cloud.

### **Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**

For a team of this size, assuming that there are not special requirements for this project. The most efficient solution would be to use a cloud-based environment. It will be cheaper and painless to get started with.
We could take advantage of, for example, the fully managed AWS Codepipeline. We would only need to configure the chosen workflow and focus on the development of the project from day 0.