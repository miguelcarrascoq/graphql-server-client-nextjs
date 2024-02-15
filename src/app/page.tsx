import Link from 'next/link';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function Home() {

  const client = new ApolloClient({
    uri: 'https://graphql-server-client-nextjs.netlify.app/api/graphql',
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query ExampleQuery {
          hello
        }
      }
    `,
    })
    .then((result) => console.log(result));

  return (
    <>
      <Link href="/api/graphql">
        GraphQL here...
      </Link>
      <p>...and see the console</p>
    </>
  );
}
