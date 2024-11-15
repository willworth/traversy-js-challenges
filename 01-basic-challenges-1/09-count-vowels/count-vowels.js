function countVowels(str) {
  let numOfVowels = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let adjustedStr = str.toLowerCase();
  for (let i = 0; i < adjustedStr.length; i++) {
    if (vowels.includes(adjustedStr[i])) {
      numOfVowels++;
    }
  }

  return numOfVowels;
}

module.exports = countVowels;
