const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let k = i;
      while (j >= 0 && arr[j] > arr[k]) {
        swap(arr, k, j);
        j--;
        k--;
      }
    }
    return arr;
  }
  const sortedArr = insertionSort([9, 3, 6, 2, 1, 11]);
  sortedArr;

  export default function pairSum(numbers, target) {
    const hashmap = {};
    console.log("MNEWW");
    for (let i = 0; i < numbers.length; i++) {
      console.log(hashmap);
      console.log(hashmap[target - numbers[i]])
      if (hashmap[target - numbers[i]] !== undefined) {
        return [hashmap[target - numbers[i]], i];
      } else {
        hashmap[numbers[i]] = i;
      }
    }
  }
  console.log(pairSum([4,9,2,1,7], 5));
  // [4,9,2,1,7], target = 5
//   {4 :0, 9:1, 2:2, }