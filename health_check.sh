#!/bin/bash

VAR1=$(curl -s https://pokedex-full-stack.fly.dev/health) 

[ "$VAR1" != "ok" ] && exit 1

