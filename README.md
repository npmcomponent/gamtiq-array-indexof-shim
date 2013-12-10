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
