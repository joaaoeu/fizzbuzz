import { expect } from 'chai';
import FizzBuzz from '../src';

describe('FizzBuzz', () => {
  it('should return `FizzBuzz` when multilple of 3 and 5 at the same time', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return `Fizz` when multilple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multilple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return number when isn\'t multiple of 3 or 5', () => {
    expect(FizzBuzz(1)).to.be.equal(1);
    expect(FizzBuzz(2)).to.be.equal(2);
  });

  it('should return 0 when FizzBuzz(0)', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
