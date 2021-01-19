// ? Instead of returning boolean throw error here, So don't have to repeat ERROR statement
const ifNotNumThrowError = (...params) => {
  for (const el of params) {
    if (el !== undefined && typeof el !== 'number') {
      throw new Error(`Received ${typeof el} | expecting NUMBER`);
    }
  }
};

function* count(start = 0, step = 1, noOfTime) {
  ifNotNumThrowError(start, step, noOfTime);
  let result = start;
  let iteration = true;
  if (noOfTime) iteration = noOfTime;
  while (iteration) {
    yield result;
    result += step;
    if (typeof iteration === 'number') iteration -= 1;
  }
}

function* cycle(iter, noOfTime) {
  ifNotNumThrowError(noOfTime);
  let iteration = true;
  if (noOfTime) iteration = noOfTime;

  while (iteration) {
    for (const el of iter) {
      yield el;
    }
    if (typeof iteration === 'number') iteration -= 1;
  }
}

function* repeat(value, noOfTime) {
  ifNotNumThrowError(noOfTime);
  let iteration = true;
  if (noOfTime) iteration = noOfTime;
  while (iteration) {
    yield value;
    if (typeof iteration === 'number') iteration -= 1;
  }
}

export { count, cycle, repeat };
