import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_TITLE_QUERY } from '../queries/queries';

const BookDetails = ({ bookTitle }) => {
  const [book, setBook] = useState(null);

  const { loading, error, data } = useQuery(GET_BOOK_BY_TITLE_QUERY, {
    errorPolicy: 'all',
    variables: { title: bookTitle }
  });

  useEffect(() => {
    if (loading) return <div>Loading ...</div>
    if (error) return console.log('Stand by... Still Loading...')

    return setBook(data.book);
  }, [loading, error, data]);

  if (!book) {
    return (
      <div id="book-details" className="alert alert-info" role="alert">
        Select a Book to See Details...
      </div>
    );
  } else {
    return (
      <div id="book-details">
        <hr />
        <h1><strong>{book.title}</strong></h1>
        <ul style={{ listStyleType: 'none' }}>
          <li><strong>Published:</strong> {book.published}</li>
          <li><strong>Author:</strong>{' '}{book.authorBook.name ? book.authorBook.name : ''}
          </li>
          <li><strong>Born:</strong>{' '}{book.authorBook.born ? book.authorBook.born : 'unknown'}</li>
        </ul>
        <hr />
      </div>
    );
  };
}

export default BookDetails;