const firstName = 'David';
const lastName = 'Michael';
const middleName = 'Abayomi';
const stateOfResidence = 'Lagos';
const gender = 'Male';

const getFullName = () => {
  return `${firstName} ${middleName} ${lastName}`;
}

const getProfile = () => {
  return {
    name: getFullName(),
    state: stateOfResidence,
    gender: gender,
  }
}

exports.getFullName = getFullName;
exports.getProfile = getProfile; 
exports.firstName = firstName;
