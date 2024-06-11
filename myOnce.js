// _.once in loadash  Polyfill

// The _.once function from Lodash creates a function that can only be invoked once. Repeated calls to the function will return the value from the first invocation. This can be useful for initialization tasks that should only happen one time.
// const _ = require('lodash');

// const initialize = _.once(() => {
//     console.log('Initialization has been done.');
// });

// initialize();  "Initialization has been done."
// initialize();  No output
// initialize();  No output

function myOnce(func, context) {
    let run
    return function () {
        if (func) {
            run = func.apply(context || this, arguments)
            func = null;
        }
        return run
    };
}

const hello = myOnce((a, b) => console.log("hello", a, b));
hello(1, 2); // "hello" will be printed
hello(1, 2); // Nothing will be printed
hello(3, 4); // Nothing will be printed


