// Memoize Polyfill(Caching)

function myMemoize(func) {
    let result = {}
    return function (...args) {
        const argsIndex = JSON.stringify(args)
        if (!result[argsIndex]) {
            result[argsIndex] = func(...args)
        }
        return result[argsIndex]
    }
}

// Example usage with timing

const clumsySquare = myMemoize((num) => {
    for (let i = 0; i <= 1000000000; i++) {
        return num * 2
    }
})

console.time("First call");
console.log(clumsySquare(6)); // Should take a while
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(6)); // Should be fast due to memoization
console.timeEnd("Second call");

console.time("Third call");
console.log(clumsySquare(10)); // Should take a while
console.timeEnd("Third call");

console.time("Fourth call");
console.log(clumsySquare(10)); // Should be fast due to memoization
console.timeEnd("Fourth call");
