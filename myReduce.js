//Reduce Polyfill 

Array.prototype.myReduce = function (callback, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

const nums = [1, 2, 3, 4]
const sum = nums.myReduce((acc, num, index, nums) => {
    return acc + num
}, 0)

console.log(sum)