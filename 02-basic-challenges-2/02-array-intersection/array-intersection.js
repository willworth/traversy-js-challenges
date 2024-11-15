function arrayIntersection(arr1, arr2) {

  const intersection = arr1.filter(value => arr2.includes(value));
  return intersection;
}

module.exports = arrayIntersection;
