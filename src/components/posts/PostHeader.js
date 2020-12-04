import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class PostHeader extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const postID = this.props.post.ID;
        const name = this.props.post.name; 

        return(

            <a 
                className = "btn"
                onClick = 
                {
                    () =>
                    {
                        this.props.history.push("/post/" + postID);
                    }
                }
            >
                {name}    
            </a>
        );
    }
}

export default withRouter(PostHeader);