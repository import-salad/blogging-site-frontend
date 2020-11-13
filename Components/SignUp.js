import Axios from "axios";
import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Card, CardBody} from "reactstrap";
import {Form, InputGroup, Input, Button} from "reactstrap";
import axios from 'axios' ;

import NavBar from './navigation/NavBar'
import User from "../model/User.js";
import UserService from '../services/UserService'

//const baseURL = "http://localhost:8080/"
const userService = new UserService() ;

class SignUp extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {

            username: "",
            email: "",
            password: ""
        };
    }

    userName    = (e) => 
    {
        this.setState({username: e.target.value});
    }

    email       = (e) => 
    {
        this.setState({email: e.target.value});
    }

    password    = (e) => 
    {
        this.setState({password: e.target.value});
    }

    async register()
    {   

        //console.log(baseURL + "user");

        let result ;
        let user = new User(this.state.username,this.state.email,this.state.password) ;
        await userService.register(user)
        .then(res=>{result=res}) ;
        

        if(result)
            this.props.history.push("/dashboard" + this.state.username);
        else
            alert('Invalid User');

        this.props.history.push("/");

    }

    render() 
    {
        return(

            <div className="sign-up">
                <NavBar history={this.props.history} isUserLogged={false}/>
                <Container>
                    <Row>
                        <Col>
                            <Card className="card">
                                <CardBody>
                                    <Form>
                                        <Row className="label">
                                            <Col className="label-content">Sign Up</Col>
                                        </Row>
                                        <InputGroup className="input-group">
                                            <Input type="text" onChange={this.userName} placeholder="Username"> </Input>
                                        </InputGroup>
                                        <InputGroup className="input-group">
                                            <Input type="text" onChange={this.email}    placeholder="E-mail">   </Input>
                                        </InputGroup>
                                        <InputGroup className="input-group">
                                            <Input type="text" onChange={this.password} placeholder="Password"> </Input>
                                        </InputGroup>
                                        <InputGroup>        
                                            <Button onClick={this.register.bind(this)} color="success" block>Register</Button> 
                                        </InputGroup>
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

export default SignUp;