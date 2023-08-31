This exercise is about a hypotethical situation where a standalone Java application is being developed by about 6 developers.

## Linting

Linting and formatting Java documents it pretty straightforward using popular extensions IDE's. For example, The Extension Pack for Java on Visual Studio Code comes with an editor for code formatter settings. The formatter can be used with a hotkey or with VS Code's command palette.

Obviously, the team should discuss the rules for formatting to ensure all code within the project is properly and similarly formatted.

## Building and Testing

GitHub seems to offer a Maven workflow with GitHub Actions. With the workflow it's possible to use Maven build and test settings for CI. The developers can create a pull request and see the possible failures that occured during building or testing.

## Alternatives for Jenkins and GitHub Actions

One major alternative seems to be GitLab, which offers CI/CD pipelines. It seems to be relatively easy to configure and the ecosystem is somewhat similar to GitHub.

Microsoft's Azure DevOps seems to be an alternative way to create a pipeline for building and testing Java applications.

## Self-hosted or cloud-based?

Following KISS principle, I would go for cloud-based services as long as the simplicity wouldn't create major flaws in the pipeline.
