import Validator from '../validator';

test.each([
  ['Нетология', false],
  ['Neto-1234-logy', false],
  ['Netology123', false],
  ['Netology123-', false],
  ['Netology123_', false],
  ['123Netology', false],
  ['-123Netology', false],
  ['_123Netology', false],
  ['Netology#&$%*', false],
  ['Netology', true],
  ['Neto_123-logy', true],
  ['Ne-1_to-23-lo_4-gy', true],
])('testing nicknames', (userName, expected) => {
  const validator = new Validator(userName);
  const result = validator.validateUsername();
  expect(result).toBe(expected);
});
