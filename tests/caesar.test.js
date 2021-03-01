const caesar = require('../scripts/caesar');

test('Shift up by 1. All lowercase', () => {
  expect(caesar('chris wu', 1)).toBe('disjt xv');
});

test('Shift up by 1. All uppercase', () => {
  expect(caesar('CHRIS WU', 1)).toBe('DISJT XV');
});

test('Shift up by 1. Mixed case', () => {
  expect(caesar('Chris Wu', 1)).toBe('Disjt Xv');
});

test('Shift up by 200', () => {
  expect(caesar('Chris Wu', 200)).toBe('Uzjak Om');
});

test('Shift down by 200', () => {
  expect(caesar('Chris Wu', -200)).toBe('Kpzqa Ec');
});

test('Wrap from z to b', () => {
  expect(caesar('z', 2)).toBe('b');
});

test('Wrap from b to y with negative offset', () => {
  expect(caesar('b', -3)).toBe('y');
});

test('Keep punctuations the same', () => {
  expect(caesar("CLG's macro is so terrible! Cut Broxah. Free my boy POB...", 3)).toBe("FOJ'v pdfur lv vr whuuleoh! Fxw Euradk. Iuhh pb erb SRE...");
});
