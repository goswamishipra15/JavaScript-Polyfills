# JavaScript Polyfills

Custom implementations of standard JavaScript methods and utility functions.

## Polyfills

| File | Description |
| :--- | :--- |
| **`myCall.js`** | Invokes a function with a custom `this` context and comma-separated arguments |
| **`myApply.js`** | Invokes a function with a custom `this` context and arguments passed as an array |
| **`myBind.js`** | Returns a new function bound to a specific `this` context and preset arguments |
| **`myMap.js`** | Transforms each array element via a callback function and returns a new array |
| **`myFilter.js`** | Returns a new array containing elements that pass a test condition |
| **`myReduce.js`** | Accumulates array values into a single result using a reducer function |
| **`myJoin.js`** | Joins all elements of an array into a single string |
| **`myPush.js`** | Appends one or more elements to an array and returns its new length |
| **`myPop.js`** | Removes and returns the last element of an array |
| **`myDebounce.js`** | Delays function execution until calls have paused for a set duration |
| **`myThrottle.js`** | Limits function execution to at most once per time window |
| **`myMemoize.js`** | Caches function results based on arguments to prevent redundant computation |
| **`myOnce.js`** | Ensures a function can only be executed a single time |

## Run

```bash
node <fileName>.js
