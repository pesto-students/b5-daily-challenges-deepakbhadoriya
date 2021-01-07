// ! code may break didn't consider many edge cases

// ? 1 If Object has Array/function in value
// ? 2 If user does a arithmetic operation in callBackFunction on string value
// ? 3 if user want to access/modify - not iteratable for not modifiable key value

// ? Thought of using TRY CATCH block to throw error in case of Error.
//  Is it a good approach @ ARFAT


const throwError = (obj) => {
  if (obj === null) throw new Error('received NULL -- expecting OBJECT ')
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
};

const objectToArray = (obj) => Object.entries(obj);

const arrayToObject = (arr) => Object.fromEntries(arr);

// your implementation

const map = (obj, callBackFn) => {
  throwError(obj);
  const resultArr = objectToArray(obj).map((item) => callBackFn(item));
  return arrayToObject(resultArr);
};

const filter = (obj, callBackFn) => {
  throwError(obj);
  const resultArr = objectToArray(obj).filter((item) => callBackFn(item));
  return arrayToObject(resultArr);
};

const invert = (obj) => {
  throwError(obj);
  const resultArr = objectToArray(obj).map((item) => item.reverse(item));
  return arrayToObject(resultArr);
};

const merge = (...params) => {
  let resultObj = {};
  for (const obj of params) {
    throwError(obj);
    resultObj = { ...resultObj, ...obj };
  }
  return resultObj;
};

const all = (obj, callBackFn) => {
  throwError(obj);
  return objectToArray(obj).every((item) => callBackFn(item));
};

const some = (obj, callBackFn) => {
  throwError(obj);
  return objectToArray(obj).some((item) => callBackFn(item));
};
export { map, filter, invert, merge, all, some };
