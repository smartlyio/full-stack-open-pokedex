
## Exercise 1
### Language: C#
\
Microsoft's Visual Studio has its own linter / code analyzer which works quite well, but isn't as powerful as full blown linters. StyleCop and SonarLint were recommended to get more powerful linting.

As for testing, Microsoft has their own unit testing library. Using Visual Studio to create a test project makes this very easy.

For building a C# project Visual Studio comes in handy once again. The project can be built directly from the IDE. However you can also build projects directly from the console easily with dotnet.

Azure DevOps seems to be one of the most popular CI solutions out there at the moment. I feel like using script files for especially smaller projects is quite common.

It seems that in this case using a cloud-based environment works well if the application in question would be a server backend. The cloud-based environment can more easily manage the server which is also most likely running in the cloud without needing extensive configuration. Cloud-based solution would also not be too expensive.
\
On the other hand if the application in question is one that is intended to be ran on the
client's machine, like a desktop application, then a cloud-based solution might be overkill. It would be relatively simple to setup an additional computer to monitor the versioning system and run some tests. It would also be possible to set it up to upload the app to a marketplace.
\
A Team that small can be quite creative in how to set up their CI.