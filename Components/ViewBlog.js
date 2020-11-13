import BlogService from '../services/BlogService'
import CommentService from '../services/CommentService'
import React from 'react' ;
import RenderBlog from './sections/RenderBlog'
import {Input,Button} from 'reactstrap'
import Comment from '../model/Comment'

const blogService = new BlogService() ;
const commentService = new CommentService() ;

export default class ViewBlog extends React.Component{
    constructor(props){
        super(props) ;
        this.state={
            blog:{},
            comments:[],
            commentBody:"",
            username:""
        }
    }

    async componentDidMount(){
        await blogService.getBlog(this.props.blogID)
        .then(res=>{this.setState({blog:res})}) ;

        await commentService.getComments(this.props.blogID)
        .then(res=>{this.setState({comments:res})}) ;
    }

    async onAddComment(){
        let comment = new Comment(this.state.username,this.state.commentBody,Date.now()) ;
        await commentService.addComment(comment)
        .then(this.setState({commentBody:""})) ;
    }

    handleCommentBody(event){
        this.setState({commentBody:event.target.value}) ;
    }
    

    render(){
        return(
            <div>
                <RenderBlog blog={this.state.blog}/>
                <p>Suggested Articles:</p>
                <p>Comments Section</p>
                <textarea
                    value={this.state.commentBody}
                    placeholder="Write a comment...."
                    onChange={this.handleCommentBody}
                />
                <Button onClick={this.onAddComment.bind(this)} color="success" block>Add comment</Button>
                <ViewComments comments={this.state.comments}/>
            </div>
        );
    }
}