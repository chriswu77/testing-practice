function reverseString(string) {
  const charArr = string.split('');
  const reversedArr = charArr.reverse();
  return reversedArr.join('');
}

module.exports = reverseString;
