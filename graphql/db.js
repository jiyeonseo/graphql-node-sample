const jiyeon = {
  id : 1,
  name : 'jiyeon',
  age: 18,
  gender: 'female'
}

const youngmi = {
  id : 2,
  name : 'youngmi',
  age: 28,
  gender: 'female'
}

export const people = [
  jiyeon,
  youngmi
];

export const getById = (id) => {
  const filteredPerson = people.filter(person => id === person.id);
  return filteredPerson[0];
}
