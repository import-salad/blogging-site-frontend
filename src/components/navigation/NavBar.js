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

function Dashboard(props)
{
    return(

        <a className = "btn" onClick = {props.onClick}>Dashboard</a>
    );
}


class NavBar extends Component
{
    constructor(props)
    {
        super(props);
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

    redirectToDashboard = () =>
    {
        this.props.history.push("/user/" + this.props.userID);
    }

    handleLogin = () =>
    {
        this.props.history.push("/login");
    }

    handleLogout = () =>
    {
        this.props.userLoggedOut() ;
    }

    handleSignUp = () =>
    {
        this.props.history.push("/signup");
    }

    render()
    {
        var login  = (this.props.isUserLogged === false)?(<Login  onClick={this.handleLogin} />):(<Logout onClick={this.handleLogout}/>);
        var signUp = (this.props.isUserLogged === false)?(<SignUp onClick={this.handleSignUp}/>):null;
        var DASHBOARD = (this.props.isUserLogged === false)?null:<Dashboard onClick = {this.redirectToDashboard}/>;
        return(

            <div className="nav">
                <ul>
                    <li><a className="btn" onClick={this.redirectToHome}  >Home  </a></li>
                    <li><a className="btn" onClick={this.redirectToSearch}>Browse</a></li>
                    <li>{DASHBOARD}</li>
                    <li>{login} </li>
                    <li>{signUp}</li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavBar);