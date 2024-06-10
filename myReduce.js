//Reduce Polyfill 

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        // If initialValue is not provided, use the first element of the array as the initial value
        accumulator = this[0];
        startIndex = 1; // Start from the second element
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }

    return accumulator;
}

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, num, index, nums) => {
    return acc + num;
}, 0);

console.log(sum); 
