const deepCopyObject = objToCopy => {
    if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

    // Create an array or object to hold the values
    const resultObject = Array.isArray(objToCopy) ? [] : {};

    //To copy all properties
    for (const key of Object.getOwnPropertyNames(objToCopy)) {
        const value = objToCopy[key];
        resultObject[key] = deepCopyObject(value);
    }

    //To copy symbol
    for (const key of Object.getOwnPropertySymbols(objToCopy)) {
        const value = objToCopy[key];
        resultObject[key] = deepCopyObject(value);
    }

    return resultObject;
};

export { deepCopyObject };