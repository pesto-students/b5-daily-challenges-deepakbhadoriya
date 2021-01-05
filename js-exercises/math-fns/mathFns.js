// You can use the function from the `Math` module.
const sqrt = (number) => Math.sqrt(number);

const power = (num, exponent) => num ** exponent;
// or you can use Math.pow(num, exponent)

const round = (num) => Math.round(num);

// Don't change the exported names.
export { sqrt, power, round };
