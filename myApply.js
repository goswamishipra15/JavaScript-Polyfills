// apply Polyfill

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error(this + "It is not callable ")
    }

    if (!Array.isArray(args)) {
        throw new TypeError("CreateListFromArrayLike called on non-object")
    }
    context.fn = this
    context.fn(...args)
}

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {
    name: 'Alice'
};

// Using the custom myApply method
greet.myApply(person, ['Hello', '!']); // Output: "Hello, Alice!"