//Pop Polyfills

const arr = [1,3,5,7]
// console.log(arr.pop())
// console.log(arr)


Array.prototype.myPop = function(){
    if(this.length === 0){
        return undefined
    }
    else{
        const lastIndex = this.length-1
        const poppedElement = this[lastIndex]
        this.length = lastIndex
        return poppedElement
    }
}

console.log(arr.myPop())
console.log(arr)






