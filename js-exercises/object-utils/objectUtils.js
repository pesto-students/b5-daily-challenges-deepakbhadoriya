const errorCheck = (obj) => {
  if (obj === null) throw new Error('received NULL -- expecting OBJECT ')
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
};

const objectToArray = (obj) => Object.entries(obj);

const arrayToObject = (arr) => Object.fromEntries(arr);

// your implementation

const map = (obj, callBackFn) => {
  errorCheck(obj);
  const resultObj = objectToArray(obj).map((item) => callBackFn(item));
  return arrayToObject(resultObj);
};

const filter = (obj, callBackFn) => {
  errorCheck(obj);
  const resultObj = objectToArray(obj).filter((item) => callBackFn(item));
  return arrayToObject(resultObj);
};

const invert = (obj) => {
  errorCheck(obj);
  const resultObj = objectToArray(obj).map((item) => item.reverse(item));
  return arrayToObject(resultObj);
};

const merge = (...params) => {
  let resultObj = {};
  for (const obj of params) {
    errorCheck(obj);
    resultObj = { ...resultObj, ...obj };
  }
  return resultObj;
};

const all = (obj, callBackFn) => {
  errorCheck(obj);
  return objectToArray(obj).every((item) => callBackFn(item));
};

const some = (obj, callBackFn) => {
  errorCheck(obj);
  return objectToArray(obj).some((item) => callBackFn(item));
};
export { map, filter, invert, merge, all, some };
