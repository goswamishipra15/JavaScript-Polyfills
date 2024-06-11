//Filter Polyfill 

Array.prototype.myFilter = function(callback){
    let temp = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
         temp.push(this[i])   
        }
    }
    return temp
}

const nums = [1,7,3,9]
const moreThanTwo = nums.myFilter((num,index,nums) => {
    return num>2
})

console.log(moreThanTwo)