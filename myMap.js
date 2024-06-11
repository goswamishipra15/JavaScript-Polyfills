//Map Polyfill 

Array.prototype.myMap = function(callback){
    let temp = []
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i],i,this))
    }
    return temp
}

const nums = [1,2,3,4]
const multiply = nums.myMap((num,index,nums) => {
    return num*3
})

console.log(multiply)