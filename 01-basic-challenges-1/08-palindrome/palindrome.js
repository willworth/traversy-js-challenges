function isPalindrome(word) {

  // strip special characters
  word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let reversedWord = word.split('').reverse().join('');
if (word === reversedWord) {
  return true;
}

module.exports = isPalindrome;



// ```js
// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = formattedStr.split('').reverse().join('');
//   return formattedStr === reversedStr;
// }
// ```

