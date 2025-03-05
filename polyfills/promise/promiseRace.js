async function promiseRace(iterable) {
  if (iterable.length === 0) {
    return new Promise(() => {});
  }

  return new Promise((resolve, reject) => {
    iterable.forEach(async (promise) => {
      try {
        const value = await Promise.resolve(promise);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
}
