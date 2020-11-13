  
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Nav} from "reactstrap";

function Login(props)
{
    return(

        <button className="btn" onClick={props.handleLogin}>Login</button>
    );
}

function Logout(props)
{
    return(

        <button className="btn" onClick={props.handleLogout}>Logout</button>
    );
}

function SignUp(props)
{
    return(

        <button className="btn" onClick={props.handleSignUp}>Sign Up</button>
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

    componentDidMount()
    {

    }

    handleLogin = () =>
    {
        console.log("login") ;
        this.props.history.push("/login");
    }

    handleLogout = () =>
    {
        this.props.history.push("/") ;
    }

    handleSignUp = () =>
    {
        this.props.history.push("/signup");
    }

    render()
    {
        var btn         = (this.state.isUserLogged === false)?(<Login   handleLogin={this.handleLogin}       />):(<Logout    handleLogout={this.handleLogout}  />);
        var greetings   = (this.state.isUserLogged === false)?(<SignUp  handleSignUp={this.handleSignUp}  />):(<Greetings                         />);
        return(

            <Nav className="nav">
                <ul>
                    <li><button className="btn" >Home</button>  </li>
                    <li                         >{btn}          </li>
                    <li                         >{greetings}    </li>
                </ul>
            </Nav>
        );
    }
}

export default withRouter(NavBar);