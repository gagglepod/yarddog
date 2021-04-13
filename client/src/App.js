// import React, { Component } from 'react';
import client from './client';
import { ApolloProvider } from '@apollo/client/react';

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>YardDog Reading List</h1>
      <BookList />
      <AddBook />
    </div>
    </ApolloProvider>
  );
}

export default App;