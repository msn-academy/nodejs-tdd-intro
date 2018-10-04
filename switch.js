const isAdult = (age) => {
  let result = 0;
  if(age < 13) {
    result = -1;
  }

  if (age < 18) {
    result = 0;
  }

  result = 1;

  return result;
}

const isAdult = (age) => {
  let result = 0;

  switch(age) {
    case 13: 
      result = -1;
      // return result;
      // break;

    case 18:
      result = 0;
      // return result;
      // break;

    default:
      result = 1;
      // return result;
      // break;
  }

  return result;
}

console.log(isAdult(18));
