async function promiseAllSettled(iterable) {
  const results = [];
  let settledCount = 0;

  if (iterable.length === 0) {
    return Promise.resolve(results);
  }

  return new Promise((resolve) => {
    iterable.forEach(async (promise, index) => {
      try {
        const value = await Promise.resolve(promise);
        results[index] = { status: "fulfilled", value };
      } catch (error) {
        results[index] = { status: "rejected", reason: error };
      } finally {
        settledCount++;
        if (settledCount === iterable.length) {
          resolve(results);
        }
      }
    });
  });
}
