import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Form} />
          <Route path="/update/user/:id" component={UpdateUser} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
