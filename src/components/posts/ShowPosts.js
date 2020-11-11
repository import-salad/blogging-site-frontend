import React, {Component} from "react";

class ShowPosts extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(

            <ul className="list-group mb-4">
                {this.props.posts.map(
                    (post) =>
                    (
                        <li key={post.name} className="list-group-item">
                            {post.name}
                        </li>
                    )
                )}
            </ul>

        );
    }
}

export default ShowPosts;
