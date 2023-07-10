import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.API_URL || 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache()
})

export const GET_ARTICLES_QUERY = gql`
  query Blogs($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
      data {
        id
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

export const GET_BLOG_DETAIL_QUERY = gql`
  query Articles($blogId: ID) {
    blog(id: $blogId) {
      data {
        attributes {
          blocks {
            ... on ComponentSharedMedia {
              file {
                data {
                  attributes {
                    alternativeText
                    caption
                    createdAt
                    url
                  }
                }
              }
              id
            }
            ... on ComponentSharedQuote {
              body
              id
              title
            }
            ... on ComponentSharedRichText {
              body
              id
            }
            ... on ComponentSharedSlider {
              files {
                data {
                  attributes {
                    alternativeText
                    caption
                    createdAt
                    url
                  }
                  id
                }
              }
              id
            }
            ... on Error {
              code
              message
            }
          }
          category {
            data {
              attributes {
                createdAt
                description
                slug
                name
              }
              id
            }
          }
          cover {
            data {
              attributes {
                alternativeText
                caption
                url
              }
            }
          }
          createdAt
          description
          publishedAt
          slug
          title
          updatedAt
        }
      }
    }
  }
`

export const GET_BLOGS_IDS = gql`
  query Query {
    blogs {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`