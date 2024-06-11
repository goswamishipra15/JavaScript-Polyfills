// bind Polyfill

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "It is not callable ")
    }

    context.fn = this
    return function (...newArgs) {
        return context.fn(...args, newArgs)
    }
}


// Example usage
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {
    name: 'Alice'
};

const boundGreet = greet.myBind(person, 'Hello');
boundGreet('!'); // Output: "Hello, Alice!"
