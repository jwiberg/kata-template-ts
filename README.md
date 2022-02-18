# kata-template-ts
Template for code katas written in JavaScript. 

## How to use this?

* Install https://nodejs.org/en/ (LTS/Current if possible)
* run "npx degit https://github.com/jwiberg/kata-template-ts.git" 
  * If npx is not inastalled install it
    * `npm install -g npx`
  * If that doesn't work clone or fork this repository
* Run `npm install`
* Start coding (check source code for examples and commands below)

### Basic commands (feel free to add your own)
```json
"scripts": {
  "lint": "ts-standard",
  "lint-fix": "ts-standard --fix",
  "test": "jest --no-cache --coverage",
  "test-watch": "jest --no-cache --watch --coverage"
}
```
* `npm run lint`
  * lint code
* `npm run lint-fix`
  * lint and fix errors
* `npm test`
  * run tests and measure coverage
* `npm test-watch`
  * run tests in "watch" mode and measure coverage
## JEST test runner documentation
* https://jestjs.io/


