function countOccurrences(input, testChar) {
  return Array.from(input).filter((currentChar) => currentChar === testChar)
    .length;
}

/*

### Using `Array.prototype.reduce()`

function countOccurrences(str, char) {
  return Array.from(str).reduce((count, currentChar) => {
    return currentChar === char ? count + 1 : count;
  }, 0);
}

### Using `Array.prototype.filter()`

function countOccurrences(str, char) {
  return Array.from(str).filter(currentChar => currentChar === char).length;
}

### Using `String.prototype.split()`

function countOccurrences(str, char) {
  return str.split(char).length - 1;
}


*/

module.exports = countOccurrences;
