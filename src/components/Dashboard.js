import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import NavBar from "./navigation/NavBar.js";
import SideBar from "./navigation/SideBar.js";

class Dashboard extends Component
{
    render()
    {
        return(

            <div className="dashboard">
                <NavBar isUserLogged={false} />
                <Container
                    style = 
                    {
                        {
                            maxWidth: "90%",
                            marginLeft: "0px",
                            marginRight: "0px",
                            marginTop: "10px"
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