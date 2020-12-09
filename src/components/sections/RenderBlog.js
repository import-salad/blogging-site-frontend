import React from 'react';
export default class RenderBlog extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        const blog = this.props.blog ;
        return(
            <div>
                <div className="post-header"
                    style = 
                    {
                        {
                            textAlign: "center",
                            fontWeight: "bold"
                        }
                    }
                >
                    <p style={{/**heading style */}}>{blog.blogHeader.heading}</p>
                    <p style={{/**username style */}}>By {blog.blogHeader.username}</p>
                    <p style={{/**time */}}>created on {(new Date(blog.blogHeader.creationTime)).toString()}</p>
                    <p>{"\n\n"}</p>
                </div>
                <div className="post-body">
                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
                </div>
            </div>
        )
    }
}