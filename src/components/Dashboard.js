import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import NavBar from "./navigation/NavBar.js";
import SideBar from "./navigation/SideBar.js";

class Dashboard extends Component
{

    componentDidUpdate()
    {
        if(this.props.isUserLogged === false)
        {
            this.props.history.push("/");
        }
    }

    userLoggedOut = () =>
    {
        this.props.userLoggedOut();
    }

    render()
    {
        return(

            <div className="dashboard">
                <NavBar 
                    isUserLogged = {this.props.isUserLogged} 
                    userID = {this.props.userID}
                    userLoggedOut = {this.userLoggedOut}
                />
                <Container
                    style = 
                    {
                        {
                            maxWidth:    "90%",
                            marginLeft:  "0px",
                            marginRight: "0px",
                            marginTop:   "10px"
                        }
                    }
                >
                    <Row>
                        <SideBar />
                        <Col>
                            {"USER-ID: " + this.props.match.params.userID}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;