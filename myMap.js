//Map Polyfill 

Array.prototype.myMap = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

const nums = [1,2,3,4]
const multiply = nums.myMap((num,index,nums) => {
    return num*3
})

console.log(multiply)