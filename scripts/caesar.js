// should retain the lower case / upper case
// should wrap around a - z
// should not do anything to punctuation
// should work with negative offsets

const checkCase = (letter) => {
  const upper = letter.toUpperCase();
  
  let caseType = 'lower';

  if (letter === upper) {
    caseType = 'upper';
  }

  return caseType;
};

function caesar(string, offset) {
  // answer is a new string
  let offsetStr = '';

  // create an array for lowercase and uppercase alphabet
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCase = lowerCase.map((letter) => letter.toUpperCase());
  const allCases = lowerCase.concat(upperCase);

  // split the string into a character array
  const charArr = string.split('');
  // loop through the array
  charArr.forEach((letter) => {
    // check if the character is a letter 
      if (allCases.includes(letter)) {
        // if it is, check the case
        const letterCase = checkCase(letter);

        // get the index of the letter from the alphabet array
        let index;
        if (letterCase === 'lower') {
          index = lowerCase.indexOf(letter);
        } else {
          index = upperCase.indexOf(letter);
        }

        // check what index + offset is 
        let shiftedIndex = index + offset;

        if (shiftedIndex > 25) {
          shiftedIndex = shiftedIndex % 26
        } else if (shiftedIndex < 0) {
          shiftedIndex = 26 + (shiftedIndex % 26);
          if (shiftedIndex === 26) {
            // if there's no remainder it means position is at 0 or a
            shiftedIndex = 0;
          }
        }

        // grab the letter at the shifted index from the proper array (depending on case) and add it onto the answer
        let shiftedLetter;

        if (letterCase === 'lower') {
          shiftedLetter = lowerCase[shiftedIndex];
        } else {
          shiftedLetter = upperCase[shiftedIndex];
        }

        offsetStr += shiftedLetter;
      } else {
        // if not a letter then just add the letter to answer
        offsetStr += letter;
      }
  });

  return offsetStr;
}

module.exports = caesar;
