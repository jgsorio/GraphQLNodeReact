import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react"
import { GET_USERS } from "../App";

const CREATE_USER = gql`
    mutation($name: String!) {
        createUser(name: $name) {
            id
            name
        }
    }
`;

const createUserForm = () => {
    const [name, setName] = useState('')
    const [createUser] = useMutation(CREATE_USER);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!name) {
            return;
        }

        await createUser({
            variables: {
                name
            },
            refetchQueries: [GET_USERS]
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default createUserForm;