import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(QUERY);
  console.log({ loading, data, error })
  return <h1>App</h1>;
}

export default App;
