function removeDuplicates(arr) {

  let uniques = new Set(arr);
  return Array.from( uniques)
}

module.exports = removeDuplicates;
