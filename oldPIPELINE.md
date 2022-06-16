name: Deployment pipeline

on:
push:
branches: - master
pull_request:
branches: [master]
types: [opened, synchronize]

jobs:
simple_deployment_pipeline:
runs-on: ubuntu-20.04
steps: - uses: actions/checkout@v3 - uses: actions/setup-node@v2
with:
node-version: '16' - name: npm install
run: npm install - name: lint
run: npm run eslint - name: build
run: npm run build - name: Test Error
if: ${{ failure() }}
uses: rjstone/discord-webhook-notify@v1
with:
severity: error
details: Build failed
webhookUrl: ${{ secrets.DISCORD_WEBHOOK }} - name: test
run: npm run test - name: Cypress run
uses: cypress-io/github-action@v4
with:
start: npm run start-prod # quote the url to be safe against YML parsing surprises
wait-on: 'http://localhost:5000'
wait-on-timeout: 30 - name: Deploy to heroku
if: ${{ github.event_name == 'push' && !contains(github.event.head_commit.message, '#skip') }}
uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
with:
heroku_api_key: ${{secrets.HEROKU_API_KEY}}
heroku_app_name: 'full-stack-open-pokedex-jordi' #Must be unique in Heroku
heroku_email: 'sangalesbenes@uoc.edu'
healthcheck: 'https://full-stack-open-pokedex-jordi.herokuapp.com/health'
checkstring: 'ok'
rollbackonhealthcheckfailed: true
tag_release:
if: ${{ github.event_name == 'push' && !contains(github.event.head_commit.message, '#skip') }}
needs: [simple_deployment_pipeline]
runs-on: ubuntu-20.04
steps: - name: Bump version and push tag
if: ${{ github.event_name == 'push' }}
uses: anothrNick/github-tag-action@1.36.0
env:
DEFAULT_BUMP: patch
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} - name: Test Info
if: ${{ success() }}
uses: rjstone/discord-webhook-notify@v1
with:
severity: info
details: A new version of Pokedex deployed.
webhookUrl: ${{ secrets.DISCORD_WEBHOOK }}
