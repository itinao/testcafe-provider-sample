# testcafe-browser-provider-testcafe-provider
[![Build Status](https://travis-ci.org/itinao/testcafe-browser-provider-testcafe-provider.svg)](https://travis-ci.org/itinao/testcafe-browser-provider-testcafe-provider)

This is the **testcafe-provider** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-testcafe-provider
```

## Usage


You can determine the available browser aliases by running
```
testcafe -b testcafe-provider
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe testcafe-provider:browser1 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('testcafe-provider:browser1')
    .run();
```

## Author
itinao 
# testcafe-provider-sample
