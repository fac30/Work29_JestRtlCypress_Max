# Founders and Coders testing workshop

Set-up

`git clone https://github.com/miahbates/fac-testing-workshop-2024.git`

`cd fac-testing-workshop-2024`

`yarn --version`

Have got yarn installed?

Yes, I have yarn installed.

Install dependencies
`yarn install`

Run development server
`yarn dev`

Run jest tests
`yarn test`

or

`yarn test:watch`

Run Cypress Tests
`yarn cypress:run`

No, I don't have yarn installed but you use npm?

Install dependencies
`npm I —force`

Run development server
`npm run dev`

Run jest tests
`npm test`

or

`npm run test:watch`

Run Cypress Tests
`npm run cypress`

Common errors:

Running `npm run test:watch` or `yarn test:watch`

```
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (fs.js:1372:28)
Emitted 'error' event at:
    at NodeWatcher.checkedEmitError (/Users/seanmcp/dev/REPO/node_modules/sane/src/node_watcher.js:143:12)
    at FSWatcher.emit (events.js:182:13)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1378:12)
```

```
brew install watchman
```
