import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
    {
      books {
        name
        id
      }
    }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <div>Stand By: Data Loading...</div>;
    if (error) return <div>Error: Something Broke!</div>;

    return data.books.map(book => (
      <li key={book.id}>Book Name: {book.name}: {book.id}</li>
    ));
  };

  function BookList() {
    return (
        <div>
          <ul id="book-list">
            { DisplayBooks() }
          </ul>
        </div>
    );
  };
  
  export default BookList;