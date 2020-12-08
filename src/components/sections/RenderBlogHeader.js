import React from 'react';
export default class RenderBlogHeader extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        const blogHeader = this.props.blogHeader ;
        return(
            <li key={blogHeader.blogID} className="list-group-item">
            <div>
                <p style={{/**heading style */}}>{blogHeader.heading}</p>
                <p style={{/**username style */}}>By {blogHeader.username}</p>
                <p style={{/**category style */}}>Tag:  {blogHeader.category}</p>
                <p style={{/**time */}}>created on {Date(blogHeader.creationTime).toString()} </p>
                <p style={{/**likes dislikes */}}>{blogHeader.likes} likes      {blogHeader.dislikes} dislikes      {blogHeader.hits} views</p>
                <p>{"\n"}</p>
            </div>
            </li>
        );
    }
}