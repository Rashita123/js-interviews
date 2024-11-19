Array.prototype.myFilterImpl = function(callback){
    if(typeof callback !== 'function'){
        throw error `${callback} is not a function`;
    }
    const filteredArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}
const array = [ 1, 2, 3, 4, 5, 6 ];
const oddArray = array.filter(item => item%2!==0)
console.log(oddArray);

const evenArray = array.myFilterImpl(item => item%2===0)
console.log(evenArray);

// Output for this file:

// [ 1, 3, 5 ]
// [ 2, 4, 6 ]