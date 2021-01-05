const validateTriangle = (maxSide, side1, side2) =>
  maxSide * maxSide === side1 * side1 + side2 * side2;

function isTriangle(side1, side2, side3) {
  const max = Math.max(side1, side2, side3);
  if (max === side1) return validateTriangle(side1, side2, side3);
  else if (max === side2) return validateTriangle(side2, side1, side3);
  else if (max === side3) return validateTriangle(side3, side1, side2);
  else return false;
}
export { isTriangle };
