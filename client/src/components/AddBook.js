import { useQuery, gql } from '@apollo/client';

const getAuthorsQuery = gql`
    {
      authors {
        name
        id
      }
    }
`;

function DisplayAuthors() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
  
      if (loading) return <option disabled>Loading Authors...</option>;
      if (error) return <option disabled>Error: Something Broke!</option>;
  
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ));
    };
  
function AuthorList() {
    return (
    <form id="add-book">
        <div className="field">
            <label>Book Name:</label>
            <input type="text" />
        </div>

        <div className="field">
            <label>Genre:</label>
            <input type="text" />
        </div>

        <div className="field">
            <label>Author:</label>
            <select id="author-list">
                <option defaultValue>Select Author</option>
                { DisplayAuthors() }
            </select>
        </div>

        <button>+</button>
    </form>
    );
};

export default AuthorList;