*This repository is a mirror of the [component](http://component.io) module [gamtiq/array-indexof-shim](http://github.com/gamtiq/array-indexof-shim). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/gamtiq-array-indexof-shim`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# array-indexof-shim

Shim for ECMAScript 5 Array.prototype.indexOf.  
Based on [source from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

## Installation

Via [Component](https://github.com/component/component):

    component install gamtiq/array-indexof-shim

## Usage

```js
var indexOf = require("array-indexof-shim");
...
var nIndex1 = someArray.indexOf(someValue1, nStartIndex);
var nIndex2 = indexOf.call(someArray, someValue2);
```

## Licence

MIT
