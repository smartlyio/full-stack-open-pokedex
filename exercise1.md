# Rust and CI

Many of the steps in Continuous Integration such as testing and building are handled by Rust's built in tools. Building happens with Rust CLI command "rustc". To make building projects easier Rust's package manager Cargo offers an easier CLI command "cargo-build" which reads build arguments from "cargo.toml" file.

Testing happens with Cargo's test command "cargo test"

RustFmt tool provides linting tools and Clippy prevents compilation of some valid code that is considered bad practice.

CI frameworks that are mentioned by the Rust documentation are Travis and GitLab CI.

Travis and GitLab CI both have free tier for both private and public repositories. Travis promises to be forever free for open source projects (which Gitlab doesn't). GitLab CI free tier promises 400 CI/CD minutes per month for private repos and 50k for open source projects. Travis gives 1000 free CI credits per month. Arbitary currency makes the pricing less transparent, so points for GitLab CI.

Travis has a tight integration with GitHub and Heroku (Travis is even used by Heroku), validating pull requests and then deploying to Heroku. GitLab provides also support for Heroku and Gitlab but its integration hasn't got so much praise.

I'd probably choose Travis for small open source projects and GitLab CI for private projects because of the pricing transparency. Both seem to be good choices on other metrics.