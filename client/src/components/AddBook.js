import React, { useState } from 'react';
// import {flowright as compose} from "lodash";
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

function displayAuthors (loading, error, data) {
    if (loading) return <option disabled>Loading Authors...</option>;
    if (error) return <option disabled>Error: Something Broke!</option>;

    return data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    ));
}

function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBookMut, { dataMutation }] = useMutation(addBookMutation);
      
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`name: ${name}, genre: ${genre}, authorId: ${authorId}`);
        addBookMut({
            variables: {
              name: name,
              genre: genre,
              authorId: authorId,
            },
            refetchQueries: [{ query: getBooksQuery }]
          });
    }
    
    return(
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}  />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                    <option>Select author</option>
                    { displayAuthors(loading, error, data) }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook