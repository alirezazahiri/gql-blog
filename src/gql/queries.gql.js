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
