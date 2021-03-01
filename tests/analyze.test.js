const analyze = require('../scripts/analyze');

test('Analyze array data and return in a object', () => {
  const data = {
    average: 5.5,
    min: 1,
    max: 13,
    length: 6
  }

  expect(analyze([1, 2, 3, 4, 10, 13])).toEqual(data);
});
