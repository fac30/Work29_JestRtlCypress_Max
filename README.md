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

Open in text editor
```
code .
```

## 🤔 Do you have yarn installed?
Check if you have yarn installed
```
yarn --version
```

### ✖️ No
*  If `yarn --version` command threw an error, and shows you don't have yarn installed - go to [Do you have npm installed?](#-do-you-have-npm-installed) ? 

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
yarn run cypress
```

## 🤔 Do you have npm installed?
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

## Issues with local set up/no vscode installed - try GitHub Codespaces

Navigate to Your GitHub Repository
```
https://github.com/miahbates/fac-testing-workshop-2024
```

Launch GitHub Codespaces
Click the green Code button near the top of the repository page.
Select the Codespaces tab.
If you don’t have an existing Codespace for this repository, click Create codespace on main (or your preferred branch).

Run development server
```
yarn dev
# or
npm run dev
```

Run jest tests
```
yarn test
# or
npm test
```

or

```
yarn test:watch
# or
npm run test:watch
```

Run Cypress Tests
GitHub Codespaces currently does not support running GUI applications, which is why yarn cypress open (which opens the Cypress Test Runner UI) doesn’t work. Since Codespaces runs in a headless environment, you’ll need to use the headless mode for Cypress testing. In a headless environment like GitHub Codespaces, Cypress relies on a virtual framebuffer (like Xvfb) to simulate a display for running tests. 

To streamline testing, add a headless script to your package.json
```
cypress:headless": "cypress run --headless
```

Since Codespaces doesn’t have Xvfb installed by default, you need to add it.
Here’s how to set up Xvfb in Codespaces to run Cypress tests in headless mode
```
sudo apt-get update
sudo apt-get install -y xvfb
```

This will only run tests in the terminal not the cypress browser UI
```yarn cypress:headless```


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
