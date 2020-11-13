
export default class RenderBlog extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        const blog = this.props.blog ;
        return(
            <div>
                <p style={{/**heading style */}}>{blog.blogHeader.heading}</p>
                <p style={{/**username style */}}>By {blog.blogHeader.username}</p>
                <p style={{/**time */}}>created on {blog.blogHeader.creationTime}, Last updated on {blog.blogHeader.lastUpdatedTime} </p>
                <p>{"\n\n"}</p>
                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
            </div>
        )
    }
}