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

    username = (e) =>
    {
        this.setState({username : e.target.value});
    }    

    password = (e) =>
    {
        this.setState({password: e.target.value});
    }

    async login()
    {
        /*Axios.get(baseURL+"user?username="+this.state.username+"&password="+this.state.password)
        .then(response=> response.data)
        .then(res=>{
            if(res){
                localStorage.setItem("isUserLogged","true");
                this.props.history.push("/");
            }
            else
                alert("invalid username/password") ;
        })
        .catch(err=>console.log(err)) ;*/
        //console.log(this.state.username) ;
        let isValid ;
        await userService.validateUser(this.state.username,this.state.password)
        .then(data=>{isValid=data})
        .catch(err=>console.log(err)) ;

        console.log(isValid) ;
        if(isValid){
            localStorage.setItem("isUserLogged","true");
            //this.props.history.push("/");
        }
    }

    render()
    {
        return(

            <div className="login">
                <NavBar history={this.props.history} isUserLogged={false}/>
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
                                            <Input type="text" onChange={this.username}    placeholder="username">   </Input>
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="text" onChange={this.password} placeholder="password"> </Input>
                                        </InputGroup>
                                        <Button onClick={this.login.bind(this)} color="success" block>Login                </Button>
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