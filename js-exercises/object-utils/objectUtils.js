// your implementation

const map = (obj, callBackFn) => {
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
  const resultObj = Object.entries(obj).map((item) => callBackFn(item));
  return Object.fromEntries(resultObj);
};

const filter = (obj, callBackFn) => {
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
  const resultObj = Object.entries(obj).filter((item) => callBackFn(item));
  return Object.fromEntries(resultObj);
};

const invert = (obj) => {
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
  const resultObj = Object.entries(obj).map((item) => item.reverse(item));
  return Object.fromEntries(resultObj);
};

const merge = (...params) => {
  let resultObj = {};
  for (const obj of params) {
    if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
    if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
    resultObj = { ...resultObj, ...obj };
  }
  return resultObj;
};

const all = (obj, callBackFn) => {
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
  return Object.entries(obj).every((item) => callBackFn(item));
};

const some = (obj, callBackFn) => {
  if (typeof obj !== 'object') throw new Error(`received ${typeof obj} -- expecting OBJECT `);
  if (Array.isArray(obj)) throw new Error('received ARRAY -- expecting OBJECT ');
  return Object.entries(obj).some((item) => callBackFn(item));
};
export { map, filter, invert, merge, all, some };
