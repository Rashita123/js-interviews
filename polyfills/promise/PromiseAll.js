function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
    if (iterable.length === 0) {
      resolve(results);
    }
  });
}

// IMPROVED:
async function promiseAll(iterable) {
  // Array to store resolved values
  const results = [];
  let resolvedCount = 0;

  // If the iterable is empty, resolve immediately with an empty array
  if (iterable.length === 0) {
    return Promise.resolve(results);
  }

  // Return a new promise
  return new Promise((resolve, reject) => {
    // Iterate over the iterable
    iterable.forEach(async (promise, index) => {
      try {
        // Await the promise and store the resolved value
        const value = await Promise.resolve(promise);
        results[index] = value; // Store the value at the correct index
        resolvedCount++;

        // If all promises have resolved, resolve the outer promise
        if (resolvedCount === iterable.length) {
          resolve(results);
        }
      } catch (error) {
        // If any promise rejects, reject the outer promise
        reject(error);
      }
    });
  });
}

// CASE I:
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 100);
// });

// console.log(await promiseAll([p0, p1, p2])) // [3, 42, 'foo']

// CASE II:
// const p0 = Promise.resolve(30);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('An error occurred!');
//   }, 100);
// });

// try {
//   await promiseAll([p0, p1]);
// } catch (err) {
//   console.log(err); // 'An error occurred!'
// }
