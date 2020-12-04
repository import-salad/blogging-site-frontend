import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Search from "./components/Search.js";
import Post from "./components/Post.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            userLogged: false,
            userID: ""
        }
    }

    userLoggedIn = (user) =>
    {
        this.setState(
            {
                userLogged: true,
                userID: user.userID
            }
        );

//      console.debug(this.state.userLogged);
    }

    render()
    {
        return(

            <Router>
                <Switch>
                    <Route 
                        exact path = "/"
                        render = 
                        {
                            (props) =>
                            {
                                return(
                                    <Home 
                                        {...props} 
                                        isUserLogged={this.state.isUserLogged}
                                    />
                                );
                            }
                        }  
                    />
                    <Route
                        exact path = "/search"
                        render = 
                        {
                            (props) =>
                            {
                                return(
                                    <Search {...props}/>
                                );
                            }
                        }
                    />
                    <Route
                        exact path = "/post/:postID/"
                        render = 
                        {
                            (props) =>
                            {
                                return(
                                    <Post {...props}/>
                                );
                            }
                        }
                    />
                    <Route
                        exact path = "/signup"
                        render =
                        {
                            (props) => 
                            {
                                return(
                                    <SignUp
                                        {...props}
                                    />
                                );
                            }
                        }
                    />
                    <Route
                        exact path = "/login" 
                        render = 
                        {
                            (props) => 
                            {
                                return(
                                    <Login 
                                        {...props}
                                        isUserLogged={this.state.userLogged}
                                        userLoggedIn={this.userLoggedIn}
                                    />
                                );
                            }
                        }
                    />
                    <Route
                        exact path = "/user/:userID"
                        render = 
                        {
                            (props) => 
                            {
                                return(
                                    <Dashboard
                                        {...props}
                                    />
                                );
                            }
                        }
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;