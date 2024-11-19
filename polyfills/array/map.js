const myMap = (array, fn) => {
    const modifiedArray = [];
    for(let i=0;i<array.length;i++){
        modifiedArray.push(fn(array[i]))
    }
    return modifiedArray;
}

Array.prototype.myMapImpl = function(callback){
    if(typeof callback !== "function"){
        throw error `${callback} is not a function`;
    }
    const modifiedArray = [];
    for(let i=0;i<this.length;i++){
        modifiedArray.push(callback(this[i], i))
    }
    return modifiedArray;
}

const array = [ 1, 2, 3, 4, 5 ];
const doubleArray = array.map(item => item*2);
console.log(doubleArray);

const trippleArray = myMap(array, item => item*3);
console.log(trippleArray);

const AddToArray = array.myMapImpl(item => item+3);
console.log(AddToArray);

// Output of the file is:

// [ 2, 4, 6, 8, 10 ]
// [ 3, 6, 9, 12, 15 ]
// [ 4, 5, 6, 7, 8 ]