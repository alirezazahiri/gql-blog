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

export const GET_BLOG_BY_SLUG = gql`
  query getBlogBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      author {
        avatar {
          url
        }
        name
        proficiency
      }
      content {
        html
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

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;
