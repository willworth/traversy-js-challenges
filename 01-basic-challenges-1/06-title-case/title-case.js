function titleCase(wordsString) {
  const words = wordsString.split(" ");

  const capitalisedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const capitalisedString = capitalisedWords.join(" ");
  return capitalisedString;
}

module.exports = titleCase;
