import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Search from "./components/Search.js";
import Post from "./components/Post.js";
import Dashboard from "./components/Dashboard.js";
import ViewBlog from "./components/ViewBlog.js";
import AddBlog from "./components/AddBlog"
import EditBlog from "./components/EditBlog"

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            isUserLogged: false,
            ID: "",
            isLoading:true
        }
    }

    userLoggedIn = (userID) =>
    {
        localStorage.setItem("userID",userID) ;
        this.setState(
            {
                isUserLogged: true,
                ID: userID
            }
        );
    }

    userLoggedOut = () =>
    {
        localStorage.removeItem("userID") ;
        this.setState(
            {
                isUserLogged: false,
                ID: ""
            }
        );
    }

    

    componentDidMount(){
        if(localStorage.getItem("userID")  != null)
            this.setState({
                isUserLogged:true,
                ID:localStorage.getItem("userID")
            }) ;
        this.setState({isLoading:false});
        
    }

    render()
    {
        if(this.state.isLoading)
            return null ;
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
                                        userID = {this.state.ID}
                                        userLoggedOut = {this.userLoggedOut}
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
                                    <Search {...props}
                                        isUserLogged={this.state.isUserLogged}
                                        userID = {this.state.ID}
                                        userLoggedOut = {this.userLoggedOut}
                                    />
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
                                    <Post {...props}
                                        isUserLogged={this.state.isUserLogged}
                                        userID = {this.state.ID}
                                        userLoggedOut = {this.userLoggedOut}
                                    />
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
                                        isUserLogged = {this.state.isUserLogged}
                                        userID = {this.state.ID}
                                        userLoggedIn = {this.userLoggedIn}
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
                                        isUserLogged={this.state.isUserLogged}
                                        userID = {this.state.ID}
                                        userLoggedOut = {this.userLoggedOut}
                                    />
                                );
                            }
                        }
                    />
                    <Route
                        exact path = "/blog/:blogID"
                        render =
                        {
                            (props) =>
                            {
                                return(
                                    <ViewBlog
                                        {...props}
                                        isUserLogged = {this.state.isUserLogged}
                                        userID = {this.state.ID}
                                        userLoggedOut = {this.userLoggedOut}
                                    />
                                )
                            }
                        }
                    />
                    <Route
                        exact path = "/user/:userID/add"
                        render =
                        {
                            (props) =>
                            {
                                return(
                                    <AddBlog
                                        {...props}
                                    />
                                )
                            }
                        }
                    />
                    <Route
                        exact path = "/user/:userID/edit/:blogID"
                        render =
                        {
                            (props) =>
                            {
                                return(
                                    <EditBlog
                                        {...props}
                                    />
                                )
                            } 
                        }
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;