import { gql, useQuery } from "@apollo/client"
import CreateUserForm from './components/createUserForm';

type User = {
  id: string;
  name: string;
}

export const GET_USERS = gql`
  query {
    user {
      id
      name
    }
  }
`;

function App() {
  const {data, loading} = useQuery<{user: User[]}>(GET_USERS);
  
  if (loading) {
    return (
      <p>Carregando....</p>
    )
  }
  return (
    <>
      {data?.user.map((user) => (<p>{user.name}</p>))}
      <CreateUserForm />
    </>
  )
}

export default App
