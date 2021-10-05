import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import Form from "./Form";
import Select from "./Select";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/billing/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  const [options, setOptions] = useState([
    {id: "", email: ""},
  ]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // client.mutate()
  };

  const GET_CLIENTS = gql`
    query getClients {
      getClients {
        id
        email
      }
    }
  `;

  useEffect(() =>{
    client
      .query({
        query: GET_CLIENTS,
      })
      .then(queryResult => {
        setOptions(queryResult.data.getClients);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Form handleSubmit={handleSubmit}>
      <Select id="user" name="user" options={options} />
    </Form>
  );
};

export default App;
