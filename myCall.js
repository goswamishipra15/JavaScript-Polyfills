// call Polyfill

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "It is not callable ")
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

// Using the custom myCall method
greet.myCall(person, 'Hello', '!'); // Output: "
