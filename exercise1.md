- The language I picked up is: `GOlang`.

- Building:
  - `go build`, compiles to an executable.
  - `go install`, compiles & "installs" it.
- Linting:
  - `Go` comes with: `gofmt` which _fomats_ the code.
  - There's also `go vet`, but isn't fully feauterd.
  - There's lots of 3rd-pary linters, ironically there's one that well manages all of them called `golangci-lint` 🤨
- Testing:

  - Unit testing:
    - `GO` has a built in support for unit-testing.
    - Test files has to end with `_test.go`
    - You start test with `go test`.
  - API testing (Integration Testing):
    - Use third party library e.g. `apitest`,
    - Rest is same as in `Unit testing`.
    - I wonder if this is better than using other tools e.g. `Cypress`.
  - E2E:
    - It seems like `GO` doesn't have a frontend framework (didn't search much).
    - There are E2Es in the sens of [?`HTTP`?](https://github.com/gavv/httpexpect)
    - I will just go with `Cypress`.
    - You'd need to build & ?deploy? or locally host before running `Cypress` E2E tests.

- Alternatives to `Jenkins` (self-hosted `CI` solutions) & `Github actions`:

  - `Buddy`
  - `CruiseControl` (looks good)
  - `CircleCI`
  - `Azuree Pipelines`

- Before answering the 3rd question, if I'm studying `DevOps` I'd use the techology that's most popular in the market.
- Self-hosted => Big complex stuff with many teams.
- Cloud-based => Small-medium projects.
