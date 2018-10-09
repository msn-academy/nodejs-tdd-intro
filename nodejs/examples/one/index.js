const fizzBuzz = (num) => {
  if(!Number.isInteger(num)) {
    throw new Error('Parameter num should be a number');
  }
  const values = [];

  for(let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      values.push('FizzBuzz');
    } else if(i % 3 === 0) {
      values.push('Fizz');
    } else if (i % 5 === 0) {
      values.push('Buzz');
    } else {
      values.push(i);
    }
  }
  return values;
}

const fizzBuzzes = fizzBuzz(20)
console.log(fizzBuzzes);
