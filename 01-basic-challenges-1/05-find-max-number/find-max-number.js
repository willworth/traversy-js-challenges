function findMaxNumber(numArr) {
  let max = numArr[0];
  for (const elem of numArr) {
    if (elem > max) {
      max = elem;
    }
  }
  return max;
}

module.exports = findMaxNumber;
