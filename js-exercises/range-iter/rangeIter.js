const isNumber = (value) => {
  if (typeof value !== 'number') throw new TypeError(`${value} is not a number`);
};

// ? first approach not able to pass  "converting instance to array" test case
// function rangeIter(startValue, endValue) {
//   isNumber(startValue);
//   isNumber(endValue);

//   return {
//     [Symbol.iterator]() {
//       let i = startValue;
//       return {
//         next() {
//           if (startValue <= endValue) {
//             return {
//               done: i >= endValue + 1,
//               value: i++,
//             };
//           }
//           return {
//             done: true,
//             value: undefined,
//           };
//         },
//       };
//     },
//   };
// }

// ? Second approach after searching online and get know about yield
function rangeIter(startValue, endValue) {
  isNumber(startValue);
  isNumber(endValue);

  return {
    *[Symbol.iterator]() {
      let i = startValue;
      while (i <= endValue) yield i++;
    },
  };
}

export { rangeIter };
