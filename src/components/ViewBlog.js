import BlogService from '../services/BlogService'
import CommentService from '../services/CommentService'
import React from 'react' ;
import RenderBlog from './sections/RenderBlog'
import {Input,Button} from 'reactstrap'
import Comment from '../model/Comment'
import NavBar from './navigation/NavBar'
import SuggestedArticles from './SuggestedArticles'
import SuggestionService from '../services/SuggestionService';
import CommentList from './CommentList';

const blogService = new BlogService() ;
const commentService = new CommentService() ;



export default class ViewBlog extends React.Component{
    constructor(props){
        super(props) ;
        this.state={
            blog:{},
            comments:[],
            commentBody:"",
            username:"",
            like:false,
            dislike:false,
            links:[],
            isLoading:true
        }
    }

    async componentDidMount(){
        await blogService.getBlog(this.props.match.params.blogID)
        .then(res=>{this.setState({blog:res});}) ;

        //console.log(JSON.stringify(this.state.blog)) ;

        await commentService.getComments(this.props.match.params.blogID)
        .then(res=>{this.setState({comments:res,isLoading:false})}) ;

        //console.log(this.state.comments) ;

        /*await SuggestionService(this.state.blog.blogHeader.heading)
        .then(res=>{this.setState({links:res,isLoading:false})});

        console.log(this.state.links) ;*/

    }

    async onAddComment(){
        let comment = new Comment(this.state.username,this.state.commentBody,Date.now()) ;
        await commentService.addComment(comment)
        .then(this.setState({commentBody:""})) ;
    }

    async onLike(){
        if(!this.state.like)
            await blogService.likeBlog(this.props.match.params.blogID)
            .then(this.setState({like:true})) ;
        else
            await blogService.notLikeBlog(this.props.match.params.blogID)
            .then(this.setState({like:false})) ;
    }

    async onDislike(){
        if(!this.state.dislike)
            await blogService.dislikeBlog(this.props.match.params.blogID)
            .then(this.setState({dislike:true})) ;
        else
            await blogService.notDislikeBlog(this.props.match.params.blogID)
            .then(this.setState({dislike:false})) ;
    }

    handleCommentBody(event){
        this.setState({commentBody:event.target.value}) ;
    }
    
    render(){
        if(this.state.isLoading)
            return null;
        return(
            <div className="post">
                <NavBar isUserLogged={false}/>
                <RenderBlog blog={this.state.blog}/>
                <Button onClick={this.onLike.bind(this)}>{(this.state.like)?"Liked!!":"Like"}</Button>
                <Button onClick={this.onDislike.bind(this)}>{(this.state.dislike)?"Disliked!!":"Dislike"}</Button>
                {/*<SuggestedArticles links={this.state.links}/>*/}
                <p>Comments Section</p>
                <textarea
                    value={this.state.commentBody}
                    placeholder="Write a comment...."
                    onChange={this.handleCommentBody}
                />
                <Button onClick={this.onAddComment.bind(this)} color="success" block>Add comment</Button>
                <CommentList comments={this.state.comments}/>
                {/*<ViewComments comments={this.state.comments}/>*/}
            </div>
        );
    }
}