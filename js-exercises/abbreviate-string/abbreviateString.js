import { isString } from './util';

const abbreviateString = (string) => {
  if (!isString(string)) throw new Error('Not a string');
  const stringArray = string.split(' ');
  const stringFirstWord = stringArray[0];
  const stringLastWordLetterInCaps = stringArray[stringArray.length - 1].charAt(0).toUpperCase();
  return `${stringFirstWord} ${stringLastWordLetterInCaps}.`;
};

export { abbreviateString };
