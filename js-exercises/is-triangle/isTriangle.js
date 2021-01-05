const validateTriangle = (maxS, s1, s2) => maxS * maxS === s1 * s1 + s2 * s2;

function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);
  if (max === a) return validateTriangle(a, b, c);
  else if (max === b) return validateTriangle(b, a, c);
  else if (max === c) return validateTriangle(c, a, b);
  else return false;
}
export { isTriangle };
