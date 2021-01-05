const alphabeticShift = (string) => {
  const resultString = [];
  for (const letter of string) resultString.push(String.fromCharCode(letter.charCodeAt(0) + 1));
  return resultString.join('');
};

export { alphabeticShift };
