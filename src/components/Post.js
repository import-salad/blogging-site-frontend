import React, {Component} from "react";
import BlogService from "../services/BlogService.js";

import NavBar from "./navigation/NavBar.js";

const blogService = new BlogService() ;

class Post extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            blog:{}
        }
    }

    async componentDidMount(){
        let blogID = this.props.match.params.postID ;
        await blogService.getBlog(blogID)
        .then((data)=>this.setState({blog:data})) ;
    }
    render()
    {
        return(
            <div className="post">
                <NavBar isUserLogged={false}/>
                {
                //  this.props.match.params.postID
                }
                <div 
                    className = "post-header"
                    style = 
                    {
                        {
                            textAlign: "center",
                            fontWeight: "bold"
                        }
                    }
                >
                    {this.state.blog.blogHeader.heading}
                </div>
                <div className = "post-body">
                    {this.state.postBody}
                </div>
            </div>
        );
    }
}

export default Post;