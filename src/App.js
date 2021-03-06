import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"

//Components
import BookList from "./componensts/BookList";
import AddBook from "./componensts/AddBook";


//Apollo Client Setup
const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Hello World</h1>
                <BookList/>
                <AddBook/>
            </div>
        </ApolloProvider>
    );
}

export default App;
