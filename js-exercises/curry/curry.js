function curry(fn) {
  return function recursiveCurry(...params1) {
    if (params1.length >= fn.length) return fn.call(this, ...params1);
    return (...params2) => recursiveCurry.call(this, ...params1, ...params2);
  };
}

export { curry };
