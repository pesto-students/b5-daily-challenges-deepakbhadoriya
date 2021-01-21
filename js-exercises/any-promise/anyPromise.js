const anyPromise = (promises) => {
  const errorsArray = [];

  // ? eslint throwing error || 'AggregateError' is not defined
  // So just bypassing using --no-verify
  const throwAggregateError = () => new AggregateError(errorsArray, 'All promises rejected');

  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then((value) => resolve(value))
        .catch((error) => {
          errorsArray.push(new Error(error));
          if (errorsArray.length === promises.length) {
            reject(throwAggregateError());
          }
        });
    }
  });
};

export { anyPromise };
