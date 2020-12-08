import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {withRouter} from "react-router-dom";

class SideBar extends Component
{
    constructor(props)
    {
        super(props);
    }

    onAddBlog = ()=>
    {
        this.props.history.push("/user/"+this.props.userID+"/add") ;
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
                    <li onClick={this.onAddBlog}>Add</li>
                    <li>View</li>
                    <li>Settings</li>
                </ul>
            </Col>
        );
    }
}

export default withRouter(SideBar);