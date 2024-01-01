# CI/CD for Flutter application

I chose Dart/Flutter to be the language to look at. Flutter is crossplatform framework developed by Google and it uses Dart as the programming language.

## Platform

Besides Jenkins and Github, you can set up CI/CD environment for Flutter in Codemagic, Bitrise and Appcircle. For this project I think the Github is the best option.

## Linting

Linting is done by flutter very well so it will not be a big problem. Default linting rules are excellent and custom rules can be defined in the project for everyone who works with the code.

## Testing

Testing tests can be written in Dart and can be ran in github very easily.

## Building

There are ready made github workflows for building a flutter applications so set up will be easy and there is pretty healthy community around it.

## Extra steps for Flutter

Flutter is not as wide spread as JavaScript so there is some extra steps needed. Usually the containers used to run the workflows dont come pre-installed with Dart and Flutter so those need to be installed manually if no custom container is build for it. If the application is going to be release as an app in Appstore and Play store, then there will also be need to set up some things for the publishing.

## Self-hosted or cloud-based

This applications CI/CD would propably be better done with cloud based solutions as there are good workflows already available and Flutter and its tooling is well integrated in to cloud environment.