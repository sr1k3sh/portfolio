import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://127.0.0.1:1337/graphql',//authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export const GET_ARTICLES_QUERY = gql`
  query {
    blogs {
      data {
        attributes {
          title
          slug
          updatedAt
          publishedAt
          description
          cover {
            data {
              attributes {
                alternativeText
                caption
                url
                provider_metadata
              }
              id
            }
          }
          category {
            data {
              attributes {
                name
                slug
                createdAt
                description
              }
            }
          }
        }
      }
    }
  }
`