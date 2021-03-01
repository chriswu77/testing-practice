const capitalize = require('../scripts/capitalize');

test('capitalize first letter of chris', () => {
  expect(capitalize('chris')).toBe('Chris');
});
