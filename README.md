# 🧪 Founders and Coders Testing Workshop

## 🔨 Set-up project locally

Clone the repo
```
git clone https://github.com/miahbates/fac-testing-workshop-2024.git
```

Navigate to the Project Directory
```
cd fac-testing-workshop-2024
```

## 🤔 Do you have yarn installed?
Check if you have yarn installed
```
yarn --version
```

### ✖️ No
*  If `yarn --version` command threw an error, and shows you don't have yarn installed - go to `Do you have npm installed`?

### ✔️ Yes
* If `yarn --version` command doesn't throw an error, and shows you have a version of yarn installed - continue with the following steps

Install dependencies
```
yarn install
```

Run development server
```
yarn dev
```

Run jest tests
```
yarn test
```

or

```
yarn test:watch
```

Run Cypress Tests
```
yarn cypress:run
```

## 🤔 Do you have yarn installed?
Check for npm 
```
npm --version
```

Install dependencies
```
npm I —force
```

Run development server
```
npm run dev
```

Run jest tests
```
npm test
```

or

```
npm run test:watch
```

Run Cypress Tests
```
npm run cypress
```

## Common errors:

Running `npm run test:watch` or `yarn test:watch`
Error:
```
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (fs.js:1372:28)
Emitted 'error' event at:
    at NodeWatcher.checkedEmitError (/Users/seanmcp/dev/REPO/node_modules/sane/src/node_watcher.js:143:12)
    at FSWatcher.emit (events.js:182:13)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1378:12)
```
Fix (if you have brew installed)
```
brew install watchman
```
