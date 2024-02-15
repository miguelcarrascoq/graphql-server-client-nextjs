Operation Example

```graphql
query ExampleQuery {
  hello
}
```

CURL version

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://graphql-server-client-nextjs.netlify.app/api/graphql' \
  --data '{"query":"query ExampleQuery { hello }"}'
```
