import { myfunction } from '../src';

describe('src/myfunction.js', () => {
  test('should return correct value', () => {
    expect(myfunction(5)).toEqual(6);
  });
});
