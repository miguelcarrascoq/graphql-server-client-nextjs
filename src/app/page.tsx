import Link from 'next/link';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function Home() {

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query ExampleQuery {
          hello
        }
    `,
    })
    .then((result) => console.log(result));

  return (
    <>
      <Link href="/api/graphql">
        GraphQL here...
      </Link>
      <br />
      <Link href="/client">
        Client
      </Link>
      <p>...and see the server console</p>
    </>
  );
}
