function capitalize(string) {
  const strArr = string.split('');
  const firstChar = strArr[0].toUpperCase();
  const capitalizedString = firstChar + strArr.slice(1).join('');
  return capitalizedString;
}

module.exports = capitalize;
