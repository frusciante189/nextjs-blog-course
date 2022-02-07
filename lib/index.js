import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            authors {
              bio
              name
              photo {
                url
              }
            }
            categories {
              name
              slug
            }
            createdAt
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getTechCategory = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(where: { categories_some: { slug: "tech" } }, last: 4) {
        edges {
          node {
            slug
            createdAt
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getWorkCategory = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(where: { categories_some: { slug: "work" } }, last: 4) {
        edges {
          node {
            slug
            createdAt
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
        featuredCategoryImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        name
        bio
        slug
        photo {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.authors;
};
