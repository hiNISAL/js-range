const range = require('../dist/jrange.umd.js');

test('range()', () => {
  expect(range()).toEqual([]);
});

test('range(0)', () => {
  expect(range(0)).toEqual([]);
});

test('range(3)', () => {
  expect(range(0)).toEqual([]);
});

test('range(10, 1, 0)', () => {
  expect(range(10, 1, 0)).toEqual([]);
});

test('range(1, 2, 3)', () => {
  expect(range(1, 2, 3)).toEqual([1]);
});

test('range(3, 3)', () => {
  expect(range(3, 3)).toEqual([]);
});

test('range(10, 1, 2)', () => {
  expect(range(10, 1, 2)).toEqual([]);
});

test('range(3, 10, -1)', () => {
  expect(range(3, 10, -1)).toEqual([]);
});

test('range(1, 5, 2)', () => {
  expect(range(1, 5, 2)).toEqual([1, 3]);
});

test('range(-3)', () => {
  expect(range(-3)).toEqual([]);
});
