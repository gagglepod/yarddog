import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

/** Import Queries */
import { GET_AUTHORS_QUERY, CREATE_BOOK, GET_BOOKS_QUERY } from '../queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  const [book, setBook] = useState({ title: '', published: '', author: '' });

  /** Executes the CREATE_BOOK Mutation */
  const [createBook] = useMutation(CREATE_BOOK, { refetchQueries: [{ query: GET_BOOKS_QUERY }] });

  const displayAuthors = () => {
    if (loading) {
      return (<option disabled key={'loading'}>Loading Authors...</option>);
    } else if (error) {
      return (<option disabled key={'error'}>Something Went Wrong!</option>);
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.name}>{author.name}</option>
      ));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { title, published, author } = book;
    console.log('onSubmitHandler: ' + book);
    createBook({ variables: { title, published, author } });
    setBook({ title: '', published: '', author: '' });
  };

  return (
    <div>
      <h4>Add a new book</h4>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <div className="form-group">
          <label htmlFor="title">Book Title: </label>
          <input className="form-control" type="text" name="title" onChange={(event) => { 
              setBook({ ...book, title: event.target.value }); 
            }} />
        </div>

        <div className="form-group">
          <label htmlFor="published">Year Published: </label>
          <input className="form-control" type="text" name="published" onChange={(event) => { 
              setBook({ ...book, published: parseInt(event.target.value) }); 
            }} />
        </div>

        <div className="form-group">
          <label htmlFor="AuthorSelect">Author Name:</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={(event) => { 
              setBook({ ...book, author: event.target.value }); 
            }} >
            <option key={'select-author'}>Select Author</option>
              {displayAuthors()}
          </select>
        </div>

        <button type="submit" className="btn btn-success">+</button>
      </form>
    </div>
  );
};

export default AddBook;