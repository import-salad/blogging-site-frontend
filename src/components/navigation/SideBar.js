import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

class SideBar extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(

            <Col
                style = 
                {
                    {
                        maxWidth: "10%",
                        textAlign: "center"
                    }
                }
            >
                <ul
                    style =
                    {
                        {
                            listStyleType: "none",
                            paddingLeft: "0px",
                            fontWeight: "bold"
                        }
                    }
                >
                    <li>Add</li>
                    <li>View</li>
                    <li>Settings</li>
                </ul>
            </Col>
        );
    }
}

export default SideBar;