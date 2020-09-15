import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/admin/login/Login";
import "./Components/admin/nav/Burger";
import Users from "./Components/admin/users/Users";
import auth from "./Components/services/authService";
 
import { ToastContainer } from "react-toastify";
import Register from "./Components/admin/register/Register";

class App extends Component {
  state = {};

  render() {
    const user = auth.getCurrentUser();
    
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <main>
            { user ? (
              <>
                <Route
                  path="/dashboard"
                  exact
                  component={Users}
                />
              </>
            ):
            (
              <Redirect to="/" />
            ) 
            }
          </main>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
