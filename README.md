# NextJS 14 - GraphQL Server & Client

GraphQL Server & Client with Next.js, and deploy to Netlify.

## Install and run locally

```bash
npm install
npm run dev
```

## Operation Example

```graphql
query ExampleQuery {
  hello
}
```

## CURL version

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://graphql-server-client-nextjs.netlify.app/api/graphql' \
  --data '{"query":"query ExampleQuery { hello }"}'
```

## set .env file

```env
NEXT_PUBLIC_URL_SERVER_GRAPHQL=http://localhost:3000/api/graphql
```

## deploy to netlify

Working project in: https://graphql-server-client-nextjs.netlify.app
