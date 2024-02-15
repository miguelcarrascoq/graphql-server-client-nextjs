Send a POST request to query this endpoint

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://graphql-server-client-nextjs.netlify.app/api/graphql' \
  --data '{"query":"query { __typename }"}'
```
