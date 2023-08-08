import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.API_URL ?? 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache()
})

export const clientInsta = new ApolloClient({
  uri: 'https://www.instagram.com/graphql/query/',
  cache: new InMemoryCache()
})
export const GET_BLOGS_CATEGORY_LIST_QUERY = gql`
  query Query($pagination: PaginationArg) {
    categories {
      data {
        id
        attributes {
          name
          slug
          blogs(pagination: $pagination) {
            data {
              id
              attributes {
                slug
                title
                cover {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                description
                publishedAt
                category {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLES_QUERY = gql`
  query Blogs($pagination: PaginationArg, $filters: BlogFiltersInput) {
    blogs(pagination: $pagination, filters: $filters) {
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
            ... on ComponentSharedVideo {
              id
              video
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
          author {
            data {
              id
              attributes {
                Avatar {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                Email
                Name
              }
            }
          }
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

export const GET_INSTA_BLOGS = gql`
 query Query {
  users {
    id
    username
    email
    posts {
      id
      title
      description
      createdAt
    }
  }
 }
`