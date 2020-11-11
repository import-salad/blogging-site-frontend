import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Card, CardBody} from "reactstrap";
import {Form, InputGroup, Input, Button} from "reactstrap";

import NavBar from "./navigation/NavBar.js";

const baseURL = "http://4c9da7fde897.ngrok.io/"

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

    register    = (e) => 
    {   
/*        
        console.log(baseURL + "user");
*/
        this.result = "";

        fetch(
            baseURL + "user",
            {
                method: "post",
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    
                    {                
                        username: this.state.username,
                        emailID: this.state.email,
                        password: this.state.password
                    }
                )
            }
        )
        .then((response)    => response.json())
        .then((result)      => this.result = JSON.stringify(result));
/*
        if(this.result === "true")
        {
            this.props.history.push("/dashboard" + this.state.username);
        }
        else
        {
            alert('Invalid User');
        }

        this.props.history.push("/");
*/

    }

    render() 
    {
        return(

            <div className="sign-up">
                <NavBar isUserLogged={false}/>
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
                                            <Button onClick={this.register} color="success" block>Register</Button> 
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