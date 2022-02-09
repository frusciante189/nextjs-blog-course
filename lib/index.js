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
        bio
        name
        slug
        twitter
        photo {
          url
        }
        instagram
        facebook
        location
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.authors;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        authors {
          bio
          name
          slug
        }
        categories {
          name
          slug
        }
        slug
        title
        createdAt
        featuredImage {
          url
        }
        content {
          html
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      category(where: { slug: $slug }) {
        name
        post {
          title
          slug
          featuredImage {
            url
          }
          createdAt
          authors {
            bio
            name
            slug
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

export const getAuthorPosts = async (slug) => {
  const query = gql`
    query GetAuthorPosts($slug: String!) {
      author(where: { slug: $slug }) {
        bio
        instagram
        location
        name
        facebook
        photo {
          url
        }
        slug
        twitter
        post {
          title
          slug
          createdAt
          featuredImage {
            url
          }
          authors {
            name
            slug
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.author;
};
