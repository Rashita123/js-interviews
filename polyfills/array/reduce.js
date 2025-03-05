// How to use reduce function? 
const array = [1,2,3,4,5];
const getSum = array.reduce((acc, currentValue, index) => {
    return acc + currentValue
});
console.log(getSum);
// 120

// if initialValue is provided, the reduce funciton runs for all the elements of the array, 
// starting form index 0

// if initialValue is not provided, the reduce function runs from index 1
// the initialValue is set to array[0]

// ** In case of array of objects, initialValue MUST be passed, so that each item passes through your function.

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log(sum); // 6

const reducerFnPolyfill = (array, fn, initialValue) => {
    let startingIndex = 0;
    let accumulatedValue = initialValue;
    if(initialValue === undefined){
        if(!array.length) throw new Error("Both initialValue and array cannot be empty.");
        accumulatedValue = array[0];
        startingIndex = 1;
    }

    for(let i=startingIndex; i<array.length;i++){
        accumulatedValue = fn(accumulatedValue, array[i]);
    }
    return accumulatedValue;

}

console.log(reducerFnPolyfill(array, (acc, initialValue) => acc * initialValue, 1)); // 120
console.log(reducerFnPolyfill(array, (acc, initialValue) => acc + initialValue)); // 15
console.log(reducerFnPolyfill([], (acc, initialValue) => acc + initialValue, 12)); // 12
// console.log(reducerFnPolyfill([], (acc, initialValue) => acc + initialValue)); // throws error, both cannot be empty

// Now what if the array is sparse? ex: [,2,3,4]
// console.log(reducerFnPolyfill([,2,3,4], (acc, initialValue) => acc + initialValue, 0)); // NaN

// for sparse arrays, we need to add another check before calling the fn
const reducerFnPolyfillIncludingSparseCase = (array, fn, initialValue) => {
    if(typeof fn !== 'function'){
        throw new Error('Callback should be of the type function'); // Add check for callback fn as well
    }
    let startingIndex = 0;
    let accumulatedValue = initialValue;
    if(initialValue === undefined){
        if(!array.length) throw new Error("Both initialValue and array cannot be empty.");
        accumulatedValue = array[0];
        startingIndex = 1;
    }

    for(let i=startingIndex; i<array.length;i++){
        if(array[i]) accumulatedValue = fn(accumulatedValue, array[i]); // add this new check
    }
    return accumulatedValue;

}
console.log(reducerFnPolyfillIncludingSparseCase([,2,3,4], (acc, initialValue) => acc + initialValue, 0)); // 9
console.log(reducerFnPolyfillIncludingSparseCase([,2,3,4], "hello", 0)); // throws Error



// FINAL AMSWER
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (typeof callbackFn !== "function") {
      throw new TypeError("Callback is not a function");
    }
  
    if (!Array.isArray(this)) {
      throw new TypeError("myReduce can only be called on arrays");
    }
  
    const arr = this;
    let startingIndex = 0;
    let accumulator = initialValue;
  
    if (arr.length === 0 && initialValue === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  
    // If no initialValue is provided, use the first element as the initial value
    if (initialValue === undefined) {
      accumulator = arr[0];
      startingIndex = 1;
    }
  
    // Iterate over the array
    for (let i = startingIndex; i < arr.length; i++) {
      if (arr[i]) {
        accumulator = callbackFn(accumulator, arr[i], i, arr);
      }
    }
  
    return accumulator;
  };
  