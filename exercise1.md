We are working on embedded system project written in c and c++. The project is firmware that will control A modern Waching machine.

## Linting, Testing and Building
- Although C/C++ are compiled languages they need formating guildine and code guidelines. clang-tidy is a good candidate.
- for testing I think Google Testing will be handy
- The building process is the toughest with creepy tool like CMake that is intended to abstract the work that is done by another low level creapy tools (make or ninja).
- Travis CI, Gitlab CI