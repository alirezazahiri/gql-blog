import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      author {
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
