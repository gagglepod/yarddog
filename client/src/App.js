import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

//components
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>YardDog Reading List</h1>
      <BookList />
    </div>
    </ApolloProvider>
  );
}

export default App;
