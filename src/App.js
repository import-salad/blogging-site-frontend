import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component
{
    render()
    {
        return(

            <Router>
                <Switch>
                    <Route exact path="/"                   render={(props) => <Home {...props} isUserLogged={false}/>} />
                    <Route exact path="/login"              component={Login}                                           />
                    <Route exact path="/signup"             component={SignUp}                                          />
                    <Route exact path={"/dashboard/:email"} render={(props) => <Dashboard {...props}/>}                 />
                </Switch>
            </Router>
        );
    }
}

export default App;