import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import resolvers from './resolver.js';
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers
  }
);

const { url } = await startStandaloneServer( server, {
  listen: { port: Number(PORT)}
});

console.log(`Sever listening on port ${PORT} - ${url}`)