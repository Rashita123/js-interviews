const binarySearch = (array, value) => {
    let leftIndex = 0;
    let rightIndex = array.length-1;
    let middleIndex;
    while(leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(array[middleIndex] < value){
            leftIndex = middleIndex + 1;
        }else if(array[middleIndex] > value){
            rightIndex = middleIndex - 1;
        }else{
            return middleIndex;
        }
    }
    return -1;
}

const array = [ 1, 2, 3, 4, 5, 6 ];
console.log(binarySearch(array, 9));
console.log(binarySearch(array, 6));

// Output of this file:
// -1
// 5