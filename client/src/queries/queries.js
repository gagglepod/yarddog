import { gql } from '@apollo/client';

/** Get All Books Query */
export const GET_BOOKS_QUERY = gql`
  {
    books {
      title
      id
      author
    }
  }
`;

/** Get All Authors Query */
export const GET_AUTHORS_QUERY = gql`
  {
    authors {
      id
      name
      born
    }
  }
`;

/** Mutations */
export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $published: Int!, $author: String!) {
    addBook(title: $title, author: $author, published: $published) {
      id
      title
      published
      author
    }
  }
`;

/** Book By Title Query */
export const GET_BOOK_BY_TITLE_QUERY = gql`
  query getBookById($title: String!) {
    book(title: $title) {
      title
      published
      id
      authorBook {
        name
        born
        id
      }
    }
  }
`;