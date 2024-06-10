//Join Polyfills

const fruits = ['apple', 'mango', 'grapes', 'banana']
//let joined = fruits.join('/')
//console.log(joined)


Array.prototype.myJoin = function(separator = '/'){
    let result = ''
    for(let i=0;i<this.length;i++){
        result += this[i]
        if(i !== this.length-1){
            result += separator
        }
    }
    return result
}

let joined = fruits.myJoin('/')
console.log(joined)



