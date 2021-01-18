function* count(start = 0, step = 1, noOfTime = true) {
  let result = start;
  let iteration = noOfTime;
  while (iteration) {
    yield result;
    result += step;
    if (typeof iteration === 'number') iteration -= 1;
  }
}

function* cycle(iter, noOfTime = true) {
  let iteration = noOfTime;
  while (iteration) {
    for (const el of iter) {
      yield el;
    }
    if (typeof iteration === 'number') iteration -= 1;
  }
}

function* repeat(value, noOfTime = true) {
  let iteration = noOfTime;
  while (iteration) {
    yield value;
    if (typeof iteration === 'number') iteration -= 1;
  }
}

export { count, cycle, repeat };
