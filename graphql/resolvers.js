import {people, getById, addPerson} from "./db";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    people: () => people,
    person: (_, {id}) => getById(id),
  },
  Mutation: {
    addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
  }
}

export default resolvers;
