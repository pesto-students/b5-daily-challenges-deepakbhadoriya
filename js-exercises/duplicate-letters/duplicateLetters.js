function duplicateLetters(string) {
  const stringArray = string.split(``);
  let duplicateLetter = 0;

  stringArray.forEach((letter) => {
    const tempDuplicate = stringArray.filter((char) => char === letter).length;
    if (tempDuplicate > duplicateLetter) duplicateLetter = tempDuplicate;
  });
  return duplicateLetter === 1 ? false : duplicateLetter;
}

export { duplicateLetters };
