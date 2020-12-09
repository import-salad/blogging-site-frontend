import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class PostList extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(

            <ul className="list-group mb-4">
                {
                    this.props.posts.map(
                        (post) =>
                        (
                            <li key={post.ID} className="list-group-item">
                                <a
                                    className="btn"
                                    onClick =
                                    {
                                        () =>
                                        {
                                            this.props.history.push("/post/" + post.ID);
                                        }
                                    }
                                >
                                    {post.name}
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
