//Push Polyfills

const arr = [1,2,4]
//arr.push(7,8,9)
//console.log(arr)



//Array Push Polyfill
Array.prototype.myPush = function(...elements){
    for(let element of elements){
        this[this.length] = element;
    }
    return this.length;
} 


arr.myPush(38,67,78)
console.log(arr)