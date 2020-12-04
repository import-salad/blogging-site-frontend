import React, {Component} from "react";
import {withRouter} from "react-router-dom";

function Login(props)
{
    return(

        <a className="btn" onClick={props.onClick}>Login</a>
    );
}

function Logout(props)
{
    return(

        <a className="btn" onClick={props.onClick}>Logout</a>
    );
}

function SignUp(props)
{
    return(

        <a className="btn" onClick={props.onClick}>Sign Up</a>
    );
}

function Greetings(props)
{
    return(

        <div>Welcome, {props.username}</div>
    );
}

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            isUserLogged: this.props.isUserLogged
        }
    }

    componentWillMount()
    {

    }

    redirectToHome = () =>
    {
        this.props.history.push("/");
    }

    redirectToSearch = () =>
    {
        this.props.history.push("/search");
    }

    handleLogin = () =>
    {
        this.props.history.push("/login");
    }

    handleLogout = () =>
    {
        
    }

    handleSignUp = () =>
    {
        this.props.history.push("/signup");
    }

    render()
    {
        var login  = (this.state.isUserLogged === false)?(<Login  onClick={this.handleLogin} />):(<Logout onClick={this.handleLogout}/>);
        var signUp = (this.state.isUserLogged === false)?(<SignUp onClick={this.handleSignUp}/>):null;
        return(

            <div className="nav">
                <ul>
                    <li><a className="btn" onClick={this.redirectToHome}  >Home  </a></li>
                    <li><a className="btn" onClick={this.redirectToSearch}>Browse</a></li>
                    <li>{login} </li>
                    <li>{signUp}</li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavBar);