import Axios from "axios";
import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Card, CardBody} from "reactstrap";
import {Form, InputGroup, Input, Button} from "reactstrap";
import UserService from '../services/UserService'

import NavBar from "./navigation/NavBar.js";

const userService = new UserService() ;
//const baseURL = "http://localhost:8080/"

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            username: "",
            password: ""
        };
    }

    updateUsername = (e) =>
    {
        this.setState({username : e.target.value});
    }    

    updatePassword = (e) =>
    {
        this.setState({password: e.target.value});
    }


    componentDidUpdate(){
        if(this.props.isUserLogged)
            this.props.history.push("/user/"+this.state.username);
    }

    async handleLogin()
    {
        let isValid ;
        await userService.validateUser(this.state.username,this.state.password)
        .then(data=>{isValid=data})
        .catch(err=>console.log(err)) ;

        //console.log(isValid) ;
        if(isValid){
            //localStorage.setItem("isUserLogged","true");
            this.props.userLoggedIn(this.state.username) ;
        }
    }

    render()
    {
        return(

            <div className="login">
                <NavBar isUserLogged={this.props.isUserLogged} userID={this.props.userID}/>
                <Container>
                    <Row>
                        <Col>
                            <Card className="card">
                                <CardBody>
                                    <Form>
                                        <Row className="label">
                                            <Col className="label-content">Login</Col>
                                        </Row>
                                        <InputGroup className="input">
                                            <Input type="text" onChange={this.updateUsername} placeholder="Username"></Input>
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="text" onChange={this.updatePassword} placeholder="Password"></Input>
                                        </InputGroup>
                                        <Button onClick={this.handleLogin.bind(this)} color="success" block>Login</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;