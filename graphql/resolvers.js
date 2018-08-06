const jiyeon = {
  name : 'jiyeon',
  age: 18,
  gender: 'female'
}

const youngmi = {
  name : 'youngmi',
  age: 28,
  gender: 'female'
}
const people = [
  jiyeon,
  youngmi
]


const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    people: () => people,
    person: (_) => jiyeon,
  },
}

export default resolvers;
