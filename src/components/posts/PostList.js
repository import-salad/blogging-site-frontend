import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import RenderBlogHeader from "../sections/RenderBlogHeader";

class PostList extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        if(this.props.posts.length === 0)
            return null ;
        return(

            <ul className="list-group mb-4">
                {
                    this.props.posts.map(
                        (post) =>
                        (
                            <li key={post.blogID} className="list-group-item">
                                <a
                                    className="btn"
                                    onClick =
                                    {
                                        () =>
                                        {
                                            this.props.history.push("/blog/" + post.blogID);
                                        }
                                    }
                                >
                                    <RenderBlogHeader blogHeader={post}/>
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

export default withRouter(PostList);