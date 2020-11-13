import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

class Dashboard extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(

            <div className="dashboard">
                <Container>
                    <Row className="label">
                        <Col className="label-content">Welcome, {this.props.match.params.email}!!!</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;