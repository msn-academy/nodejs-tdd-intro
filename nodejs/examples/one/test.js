const { expect } = require('chai');
const fizzBuzz = require('./index');

describe('Fizz Buzz test', () => {
  it('return an error when a string is provided', () => {
    const fizzBuzzes = fizzBuzz('this is a string');

    expect(fizzBuzzes).to.equal('Parameter num should be a number');
  })

  it('return an error when an array is provided', () => {
    const fizzBuzzes = fizzBuzz([1, 2, 3, 4, 5]);

    expect(fizzBuzzes).to.equal('Parameter num should be a number');
  })

  it('return an error when an object is provided', () => {
    const fizzBuzzes = fizzBuzz({ test: 'test' });

    expect(fizzBuzzes).to.equal('Parameter num should be a number');
  })

  it('return an error when  a string of an integer is passed', () => {
    const fizzBuzzes = fizzBuzz('20');

    expect(fizzBuzzes).to.equal('Parameter num should be a number');
  })

  it('return an array of 7 items when 7 is passed as a parameter', () => {
    const fizzBuzzes = fizzBuzz(7);

    expect(fizzBuzzes).to.have.lengthOf(7);
    expect(fizzBuzzes[5]).to.equal('Fizz');
    expect(fizzBuzzes[4]).to.equal('Buzz');
  })

  it('return an array of 20 items when 20 is passed as a parameter', () => {
    const fizzBuzzes = fizzBuzz(20);

    expect(fizzBuzzes).to.have.lengthOf(20);
    expect(fizzBuzzes[14]).to.equal('FizzBuzz');
    expect(fizzBuzzes[18]).to.equal(19);
  })
})
