import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Card, CardBody} from "reactstrap";
import {Form, InputGroup, Input, Button} from "reactstrap";

import NavBar from "./navigation/NavBar.js";

const baseURL = "https://113.193.94.216:8080/";

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email: "",
            password: ""
        };
    }

    email = (e) =>
    {
        this.setState({email : e.target.value});
    }    

    password = (e) =>
    {
        this.setState({password: e.target.value});
    }

    login = (e) =>
    {
    
        this.result = "";

        fetch(
            baseURL + "user?username=" + this.state.email + "&password=" + this.state.password,
            {
                method: "GET"
            }
        )
        .then((response)    => response.json())
        .then((result)      => {this.result = JSON.stringify(result)})
        .catch((err)        => {console.log(err)});

        console.log(this.result);
/*
        localStorage.setItem("isUserLogged","true");

        this.props.history.push("/");
*/
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
                                            <Input type="text" onChange={this.email}    placeholder="E-mail">   </Input>
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="text" onChange={this.password} placeholder="password"> </Input>
                                        </InputGroup>
                                        <Button onClick={this.login} color="success" block>Login                </Button>
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