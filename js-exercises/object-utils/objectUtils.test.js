import { map, filter, invert, merge, all, some } from './objectUtils';

const human = { eyes: 2, feet: 2, hands: 2, noise: 1 };
const person = { name: 'John', age: 30, car: 'honda' };

// write your own test cases
describe('test Map', () => {
  it('should modify the object according to call back', () => {
    expect(map(human, ([key, val]) => [key.toUpperCase(), val * 10])).toStrictEqual({
      EYES: 20,
      FEET: 20,
      HANDS: 20,
      NOISE: 10,
    });
  });
  it('throws error on invalid parameters', () => {
    expect(() => map(123)).toThrow();
    expect(() => map(null)).toThrow();
    expect(() => map([])).toThrow();
    expect(() => map('a')).toThrow();
  });
});

describe('test filter', () => {
  it('should filter the object according to call back', () => {
    expect(filter(human, ([key]) => key === 'eyes')).toStrictEqual({ eyes: 2 });
  });
  it('throws error on invalid parameters', () => {
    expect(() => filter(123)).toThrow();
    expect(() => filter(null)).toThrow();
    expect(() => filter([])).toThrow();
    expect(() => filter('a')).toThrow();
  });
});

describe('test invert', () => {
  it('should inverts key value pairs.', () => {
    expect(invert(person)).toStrictEqual({
      John: 'name',
      30: 'age',
      honda: 'car',
    });
  });
  it('throws error on invalid parameters', () => {
    expect(() => invert(123)).toThrow();
    expect(() => invert(null)).toThrow();
    expect(() => invert([])).toThrow();
    expect(() => invert('a')).toThrow();
  });
});

describe('test merge', () => {
  it('should merge the two objects.', () => {
    expect(merge(person, human)).toStrictEqual({
      name: 'John',
      age: 30,
      car: 'honda',
      eyes: 2,
      feet: 2,
      hands: 2,
      noise: 1,
    });
  });
  it('throws error on invalid parameters', () => {
    expect(() => merge(123)).toThrow();
    expect(() => merge(null)).toThrow();
    expect(() => merge([])).toThrow();
    expect(() => merge('a')).toThrow();
  });
});

describe('test all', () => {
  it('should return true if callback condition meet for all key value pair', () => {
    expect(all(human, ([, value]) => value < 4)).toBeTruthy();
  });
  it('should return false if callback condition does not meet for any key value pair ', () => {
    expect(all(human, ([, value]) => value > 4)).toBeFalsy();
  });
  it('throws error on invalid parameters', () => {
    expect(() => all(123)).toThrow();
    expect(() => all(null)).toThrow();
    expect(() => all([])).toThrow();
    expect(() => all('a')).toThrow();
  });
});

describe('test some', () => {
  it('should return true if callback condition meet for any key value pair', () => {
    expect(some(human, ([, value]) => value === 1)).toBeTruthy();
  });
  it('should return false if callback condition does not meet for any key value pair', () => {
    expect(some(human, ([, value]) => value === 10)).toBeFalsy();
  });
  it('throws error on invalid parameters', () => {
    expect(() => some(123)).toThrow();
    expect(() => some(null)).toThrow();
    expect(() => some([])).toThrow();
    expect(() => some('a')).toThrow();
  });
});
