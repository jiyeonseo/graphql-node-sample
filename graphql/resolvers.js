import {people, getById, addPerson, getMovies} from "./db";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    people: () => people,
    person: (_, {id}) => getById(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  },
  Mutation: {
    addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
  }
}

export default resolvers;
