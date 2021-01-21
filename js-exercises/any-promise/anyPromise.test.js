import { anyPromise } from './anyPromise';

const pErr = new Promise((resolve, reject) => reject('Always fails'));
const pSlow = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Done eventually'));
const pFast = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Done quick'));

describe('anyPromise test', () => {
  it('validate resolve of anyPromise', async () => {
    await expect(anyPromise([pErr, pSlow, pFast])).resolves.toBe('Done quick');
  });
  it('validate resolve of anyPromise', async () => {
    await expect(anyPromise([pErr, pSlow])).resolves.toBe('Done eventually');
  });
  it('validate resolve of anyPromise', async () => {
    await expect(anyPromise([pErr])).rejects.toThrow('All promises rejected');
  });
});
