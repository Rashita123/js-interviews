// In selection sort, we select the min Element, keep it to the leftest element possible and keep iterating
                // 0   1   2   3   4   5
// const array = [ 13, 46, 24, 52, 20, 9 ];


// Step I (i=0) : min(0,) = 9(index=5), swap(0, 5)
// new Array = [ 9, 46, 24, 52, 20, 13 ]; Already sorted till index = 0
//          [sorted][unsorted          ]

// Step II (i=1) : min(1,) = 13(index=5), swap(1, 5)
// new Array = [ 9, 13, 24, 52, 20, 46 ]; Already sorted till index = 1
//             [sorted][unsorted      ]

// Step II (i=2) : min(2,) = 20(index=4), swap(2, 4)
// new Array = [ 9, 13, 20, 52, 24, 46 ]; Already sorted till index = 2
//             [sorted     ][unsorted  ]
// This will go uptil 1-5steps(i=0 to i=4), i.e. length-1 steps, length-2 value of i, because the last element will always be sorted, we can skip that


const array = [ 13, 46, 24, 52, 20, 9 ];

const findMinElement = (unsortedArray, startingIndex) => {
    let minElementIndex = startingIndex;
    let minElement = unsortedArray[startingIndex];
    for(let index=startingIndex; index<unsortedArray.length; index++){
        if(unsortedArray[index] < minElement){
            minElement = unsortedArray[index];
            minElementIndex = index;
        }
    }
    return minElementIndex;
}
const swap = (array, leftIndex, rightIndex) => {
    const leftValue = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftValue;
}
const selectionSort = (unsortedArray) => {
    for(let index=0; index<=unsortedArray.length-2; index++){
        const minIndex = findMinElement(unsortedArray, index);
        swap(unsortedArray, index, minIndex);
    }
    return unsortedArray;
}
const sortedArray = selectionSort(array);
console.log(sortedArray); // [ 9, 13, 20, 24, 46, 52 ]

const array2 = [ 0,5,0,20,12 ];
const sortedArray2 = selectionSort(array2);
console.log(sortedArray2); // [ 0, 0, 5, 12, 20 ]