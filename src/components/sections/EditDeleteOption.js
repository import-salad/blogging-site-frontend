import React from 'react' ;
import { withRouter } from 'react-router-dom';
import {Button} from 'reactstrap';
import BlogService from "../../services/BlogService"

const blogService = new BlogService() ;

class EditDeleteOption extends React.Component{
    constructor(props){
        super(props) ;
    }

    onEditBlog(){
        this.props.history.push("/user/"+this.props.username+"/edit/"+this.props.blogHeader.blogID) ;
        console.log("editing");
    }

    async onDeleteBlog(){
        await blogService.deleteBlog(this.props.username,this.props.blogHeader.blogID)
        .then(()=>this.props.isLoading()) 
    }

    render(){
        if(this.props.username != this.props.blogHeader.username)
            return null ;
        return(
            <div>
                <Button onClick={this.onEditBlog.bind(this)}>Edit</Button>
                <Button onClick={this.onDeleteBlog.bind(this)}>Delete</Button>
            </div>
        )
    }
}

export default withRouter(EditDeleteOption) ;