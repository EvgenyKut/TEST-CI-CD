import { customSum } from './sum';

describe('sum', function () {
  test('correct sum action', () => {
    expect(customSum(10, 15)).toBe(25);
  });

  test('correct sum action (negative values', () => {
    expect(customSum(-10, -15)).toBe(-25);
  });
});
