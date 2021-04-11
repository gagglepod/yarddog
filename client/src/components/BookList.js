import { useQuery, gql } from '@apollo/client';
// import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    query GetBooks {
      books {
        name
        id
      }
    }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occured!</p>;

    return data.books.map(({ name, id}) => (
      <div key={id}>
          <p>{name}: {id}</p>
      </div>
    ));
  }
  
  export default BookList;