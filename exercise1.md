I picked Swift language and I don't know much about. For example, I have never written a line of Swift.

When I googled about CI/CD for Swift project I stumbled upon a blog about building, testing and deploying an iOS App with CI/CD.

It looks like "SemaphoreCI" would fit our needs as the CI/CD solution. For example, it can be configured to:
    1. Run all unit and UI tests.
    2. Build the app and generate an ipa archive
    3. Generate automated App Store screenshots
    4. Upload the archived ipa and screenshots

For linting the we could have a shared settings for something like SwiftLint. Or have swiftLint to lint the code on each pass through of CI/CD pipeline.
XCTest seem like a good alternatives. It is used to create and run both unit and UI tests.
This would be a good for our needs. We want to every software update to make it to the end-product through a strictly defined path.

Other alternatives to set up a CI/CD include Atlassian Bamboo, Bitrise, Buddy, Buildkite, Codemagic, GitLab CI, TeamCity, Visual Studio App Center, Xcode Cloud, Jenkins and GitHub Actions.

It would be better to use cloud-based environment, since our application doesn't require anything crazy special configurations.