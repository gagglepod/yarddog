import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS_QUERY } from '../queries/queries';

/** Compenents */
import BookDetails from './BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY, {
    errorPolicy: 'all'
  });
  const [selected, setSelected] = useState(null);

  const displayBooks = () => {
    if (loading) return <div>Loading Books...</div>;
    if (error) return <div>Something Went Wrong!</div>;
    
    if (data.books) {
      return data.books.map((book) => {
        return (
          <li style={{ cursor: 'pointer' }} key={book.id} onClick={(event) => {
              setSelected(book.title);
            }}
          >{book.title}</li>
        );
      });
    }
  };

  return (
    <div>
      <ul id="book-list" style={{ listStyleType: 'none' }}>{displayBooks()}</ul>
      <BookDetails bookTitle={selected} />
    </div>
  );
};

export default BookList;