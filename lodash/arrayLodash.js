const fruits = [
    'apple',
    'banana',
    'mango',
    'dragonfruit',
    'kiwi'
]
const splitArray = _.chunk(fruits, 2);
console.log(_.chunk(fruits, 3))


// import _ from "lodash";
const curriedAdd = _.curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3)); // Output: 6