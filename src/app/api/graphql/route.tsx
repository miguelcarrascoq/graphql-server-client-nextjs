import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

const resolvers = {
  Query: {
    hello: () => 'world',
    numero: () => 123
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Query {
    numero: Int
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

export { handler as GET, handler as POST };