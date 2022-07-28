import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      author {
        name
        avatar {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_BY_SLUG = gql`
  query getAuthorBySlug($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      proficiency
      description {
        html
      }
      posts {
        coverImage {
          url
        }
        id
        slug
        title
      }
    }
  }
`;
