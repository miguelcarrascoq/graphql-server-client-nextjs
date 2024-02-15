import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
    resolvers,
    typeDefs,
    plugins: [
        // Install a landing page plugin based on NODE_ENV
        process.env.NODE_ENV === 'production'
            ? ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: false,
            })
            : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };