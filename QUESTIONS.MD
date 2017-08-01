# COLLECTION of JAVASCRIPT QUESTIONS

### 1. require() function in some javascript? what and how?

```require() is not part of your standard JavaScript. In context to your question and tags, require() is built into Node.js to load modules. The concept is similar to C/Java/Python/[insert more languages here] imports or includes.

The concept of modules is similar to just adding small bits of JavaScript code via <script> tags. Unlike adding a <script> tag, it doesn't leak the file into the global scope. The file has its own scope, essentially trapping everything you define in that file, unless you decide to expose functionality.  require returns a value, depending on what the module exposes using exports or module.exports. Another post explains how require() works in conjunction with exports. 

In your code, it loads the pg module, which I guess is a PostgreSQL driver for NodeJS. The part where you do npm install pg downloads the pg module from npm (a package repository for NodeJS modules) and makes it available to your project via require('pg');.
```

```
Just in case you were wondering why I mentioned "in context to your question", there are 3rd-party libraries that also use a function named require to do something. It's handy to identify which is which.

RequireJS exposes a function called require, along with define to load dependencies before running the code provided. The syntax is in AMD format.
Neuter, which concatenates js files, also exposes a function named require. This one acts much closer to PHP's import.
Browserify uses require on the browser, allowing scripts on the browser to be written NodeJS style (CommonJS module syntax).
```

in `webpack` has also a function which has name require()

```
We can see require() was used in Webpack
```