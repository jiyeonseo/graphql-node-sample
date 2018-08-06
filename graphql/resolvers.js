import {people, getById} from "./db";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    people: () => people,
    person: (_, {id}) => getById(id),
  },
}

export default resolvers;
