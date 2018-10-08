const calculator = {
  // num1: 12, // number one
  // num2: 4, // number two
  add(num1, num2) { // add method
    return num1 + num2;
  },
  subtract(num1, num2) { // subtract method
    return num1 - num2;
  }
}

// const getFullName = (firstName, lastName) => {
//   return firstName + ' ' + lastName;
// }

exports.calc = calculator;
exports.add = calculator.add;
// exports.getFullName = getFullName;
// module.exports = calculator;
