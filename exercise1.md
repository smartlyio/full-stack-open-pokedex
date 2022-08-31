# Exercise 1

## Question

> Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.
>
> Let us assume that the application is coded with some other language than JavaScript/TypeScript, e.g. in Python, Java, or Ruby. You can freely pick the language. This might even be a language you do not know much yourself.
>
> Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.
>
> The points to discuss:
>
> - Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
> - What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
> - Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
>
> Remember that there are no 'right' answers to the above!

---

## Answer

Let's pick the [Rust programming language](https://rust-lang.org/) for this exercise.

For the linting, I would use [clippy](https://github.com/rust-lang/rust-clippy). It is the official linter for Rust code, and tooling exists for running it in CI.

For building, I would simply use [cargo](https://github.com/rust-lang/cargo) which is the official build tool for Rust repositories. It is easy to set up for both development and production builds with a simple command line flag.

For testing, I have two main options in mind. The Rust programming language has builtin tooling for testing, so a simple `cargo test` can already run all the tests within a repository without further setup. Alternative test runners exist too, and one highly praised alternative is [cargo nextest](https://github.com/nextest-rs/nextest/).

In addition to these, I would definitely set up a formatting step. Rust has an official style guide and a builtin tool for automatically formatting code, [rustfmt](https://github.com/rust-lang/rustfmt). This tool can also be used to check that a codebase is correctly formatted.

For CI, I would likely use GitHub Actions. Of course there are plenty of alternatives too: CircleCI, GitLab, CircleCI, Travis, and many more. Even major cloud providers like AWS and Azure have CI/CD pipeline tools available. GitHub Actions has the added benefit that plenty of publicly-available "recipes" for the actions are freely available and easy to reuse.

The decision of cloud-based versus self-hosted usually boils down to a question of scale. The example of a 6-person team sounds like the scale is fairly small, so cloud offerings are probably both fast and cheap enough. With larger teams working on the same repository, cloud-based CI/CD pipelines can easily get either slow due to resource constraints and queues, or prohibitively expensive due to their pricing models when requesting more capacity.
