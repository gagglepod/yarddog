import React from 'react';
import { getBooksQuery } from '../queries/queries';
import { useQuery } from '@apollo/client';

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading Books....</p>
  if (error) return <p>Something Went Wrong!</p>
  return data.books.map(book => {
      return (
          <li key={book.id}> {book.name}</li>
      )
  })
}

export default BookList;