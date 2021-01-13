const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
  }
  return true;
};

const iterator = (number) => ({
  [Symbol.iterator]() {
    let i = 2;
    return {
      next() {
        return {
          done: i > number,
          value: i++,
        };
      },
    };
  },
});

function sumPrimes(number) {
  if (typeof number !== 'number') throw new Error(`got ${typeof number} | expecting number`);

  // ? Didn't know how to consider case || if number is 1 so thrown a error
  if (number === 1) throw new Error('1 is neither prime nor composite number.');

  let primeSum = 0;
  for (const num of iterator(number)) {
    if (isPrime(num)) primeSum += num;
  }

  return primeSum;
}

export { sumPrimes };
