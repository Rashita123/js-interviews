function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((e) => {
          rejectedCount++;
          errors[index] = e;

          if (rejectedCount === iterable.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });

    if (iterable.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }
  });
}

// IMPROVED:
async function promiseAny(iterable) {
  // Array to store rejection errors
  const errors = [];
  let rejectedCount = 0;

  // If the iterable is empty, reject immediately with an AggregateError
  if (iterable.length === 0) {
    return Promise.reject(new AggregateError([], "All promises were rejected"));
  }

  // Return a new promise
  return new Promise((resolve, reject) => {
    // Iterate over the iterable
    iterable.forEach(async (promise, index) => {
      try {
        // Await the promise and resolve the outer promise with its value
        const value = await Promise.resolve(promise);
        resolve(value);
      } catch (error) {
        // If the promise rejects, store the error and increment the rejected count
        errors[index] = error;
        rejectedCount++;

        // If all promises have rejected, reject the outer promise with an AggregateError
        if (rejectedCount === iterable.length) {
          reject(new AggregateError(errors, "All promises were rejected"));
        }
      }
    });
  });
}

//   Case I:
// const p0 = Promise.resolve(42);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(21);
//   }, 100);
// });

// console.log(await promiseAny([p0, p1])); // 42

// Case II:
// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 100);
//   });
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Err!');
//     }, 400);
//   });

//   console.log(await promiseAny([p0, p1])); // 42
