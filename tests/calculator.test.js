const calculator = require('../scripts/calculator');

test('use the calculator add method to sum 5 and 3', () => {
  expect(calculator.add(5,3)).toBe(8);
});

test('use the calculator subtract method to subtract 5 and 3', () => {
    expect(calculator.subtract(5,3)).toBe(2);
});

test('use the calculator divide method to divide 10 and 5', () => {
    expect(calculator.divide(10,5)).toBe(2);
});

test('use the calculator multiply method to multiply 10 and 5', () => {
    expect(calculator.multiply(10,5)).toBe(50);
});
