import { customMultiply } from './multiply';

describe('multiply', function () {
  test('correct multiply action', () => {
    expect(customMultiply(10, 15)).toBe(150);
  });

  test('correct multiply action (negative values', () => {
    expect(customMultiply(-10, -15)).toBe(150);
  });
});
