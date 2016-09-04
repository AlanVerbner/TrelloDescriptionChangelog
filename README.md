# Trello Description Changelog Plugin

This repo is based on this great repo https://github.com/jhen0409/react-chrome-extension-boilerplate.git

## Motivation

- Trello doesn't have an option to show a card description history changelog.
- For fun! (react + redux are awesome)

![Example](https://cloud.githubusercontent.com/assets/3750504/18231231/aedc8a1a-7289-11e6-8914-84ef2434284d.gif)

## TODO

- [x] Catch webservice errors
- [x] Show an indicator when the app is fetching data
- [ ] Remove unused code broght by the project the repo was based on
- [ ] Fix eslint errors
- [ ] Clean package.json
- [ ] Update README.md
- [ ] Tests
- [ ] Remove this todo once everything is done :P


# React Chrome Extension Boilerplate

> Boilerplate for Chrome Extension React.js project.

## Features

 - Simple [React](https://github.com/facebook/react)/[Redux](https://github.com/rackt/redux) examples of Chrome Extension Window & Popup & Inject pages
 - Hot reloading React/Redux (Using [Webpack](https://github.com/webpack/webpack) and [React Transform](https://github.com/gaearon/react-transform))
 - Write code with ES2015+ syntax (Using [Babel](https://github.com/babel/babel))
 - E2E tests of Window & Popup & Inject pages (Using [Chrome Driver](https://www.npmjs.com/package/chromedriver), [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver))

## Examples

The example is edited from [Redux](https://github.com/rackt/redux) TodoMVC example.

#### Inject page

The inject script is being run by [chrome/extension/background/inject.js](chrome/extension/background/inject.js). A simple example will be inject bottom of page(`https://github.com/*`) if you visit.

## Installation

```bash
# clone it
$ git clone https://github.com/jhen0409/react-chrome-extension-boilerplate.git

# Install dependencies
$ npm install
```

## Development

* Run script
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### React/Redux hot reload

This boilerplate uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

* `test/app`: React components, Redux actions & reducers tests
* `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
