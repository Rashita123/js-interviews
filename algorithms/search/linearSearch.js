const linearSearch = (array, value) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === value){
            console.log(`Element ${value} found in the array at index ${i}`);
            return;
        }
    }
    console.log(`Element ${value} not found in the array`);
}

const array = [ 1, 2, 34, 5 ];
linearSearch(array, 6);
linearSearch(array, 2);
linearSearch(array, 34);

// Output of this file:

// Element 6 not found in the array
// Element 2 found in the array at index 1
// Element 34 found in the array at index 2