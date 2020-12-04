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
            username: "",
            password: ""
        };
    }

    updateUsername = (e) =>
    {
        this.setState(
            {
                username: e.target.value
            }
        );
    }    

    updatePassword = (e) =>
    {
        this.setState(
            {
                password: e.target.value
            }
        );
    }

    handleLogin = (e) =>
    {
/*
        this.result = "";
        fetch(
            baseURL + "user?username=" + this.state.email + "&password=" + this.state.password,
            {
                method: "GET"
            }
        )
        .then((response) => response.json())
        .then((result)   => {this.result = JSON.stringify(result)})
        .catch((err)     => {console.log(err)});
*/
        const userID = 0;
        this.props.history.push("/user/" + userID);
}

    render()
    {
        return(

            <div className="login">
                <NavBar isUserLogged={false}/>
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
                                        <Button onClick={this.handleLogin} color="success" block>Login</Button>
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