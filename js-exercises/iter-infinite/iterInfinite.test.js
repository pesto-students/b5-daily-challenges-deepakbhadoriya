import { count, cycle, repeat } from './iterInfinite';

describe('count test', () => {
  it('validate output of count function', () => {
    expect(Array.from(count(10, 10, 10))).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
  it('throws error on invalid parameters or exception', () => {
    expect(() => Array.from(count(null))).toThrow();
    expect(() => Array.from(count(10, 'a'))).toThrow();
  });
});

describe('cycle test', () => {
  it('validate output of cycle function', () => {
    expect(Array.from(cycle('abcd', 5))).toEqual([
      'a',
      'b',
      'c',
      'd',
      'a',
      'b',
      'c',
      'd',
      'a',
      'b',
      'c',
      'd',
      'a',
      'b',
      'c',
      'd',
      'a',
      'b',
      'c',
      'd',
    ]);
  });
  it('throws error on invalid parameters or exception', () => {
    expect(() => Array.from(cycle(2))).toThrow();
    expect(() => Array.from(cycle('a', 'a'))).toThrow();
  });
});

describe('repeat test', () => {
  it('validate output of repeat function', () => {
    expect(Array.from(repeat(5, 10))).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });
  it('throws error on invalid parameters or exception', () => {
    expect(() => Array.from(repeat('a', 'a'))).toThrow();
  });
});
