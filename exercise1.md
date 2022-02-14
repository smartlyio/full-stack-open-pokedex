# What are the specific tools for taking care of these steps in the ecosystem of the language you picked?

I chose a Haskell / Yesod app. Whenever there's concurrency and file I/O involved, one should test those carefully. When the application is developed using a stable and tested framework, such as Yesod, most of the problems are already dealt with. **Yesod.Test** can be used for integration tests for your WAI/Yesod applications. Unit testing with concurrency in mind can be made easier with the **dejafu** library. Then there's of course QuickCheck for basic unit testing. It can be quickly configured to find the edge cases of your functions. This way, your function definitions become more defined and you know what to expect when using them.

Linting can be done with hlint. It has an VSCode integration and it provides source code suggestions that make the code more readable and less verbose. For code formatting there's Stylish-Haskell and haskell-formatter, at least.

# Jenkins and GitHub Actions alternatives? Self-hosted or cloud-based environment?

**Nix** has become the most used tool mentioned in Haskell CI/CD pipelines. This mostly has to do with Docker builds, I think.

Michael Snoyman said that he's a fan of cacheing modules when deploying to Docker. Delving deeper into r/Haskell I quickly find out why: the build times for a Haskell app from scratch is very long, as there is so much to be downloaded and compiled.

If build times are critical, it might be the most straightforward option to build locally. The build times of Haskell projects depend hugely on caches. So, fixing even the slightest error in the code could take an hour to get a docker container built and deployed, unless using Nix, which makes things a lot faster.
