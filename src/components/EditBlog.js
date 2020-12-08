import QuillEditor from './editor/quillEditor'
import React, { useState } from 'react'
import { Typography } from 'antd';
import BlogHeader from '../model/BlogHeader';
import Blog from '../model/Blog';
import BlogService from '../services/BlogService';
import NavBar from './navigation/NavBar';
import { withRouter } from 'react-router-dom';

//const { Title } = Typography;

const SubButton = React.createRef() ;
const blogService = new BlogService() ;

class EditBlog extends React.Component{
    constructor(props){
        super(props) ;
        this.state = 
        {
            username: "",
            heading: "",
            category: "",
            content: "",
            isLoading:true,
            creationTime:0,
            blog:{}
        };
        this.handleCategory = this.handleCategory.bind(this) ;
        this.handleHeading = this.handleHeading.bind(this) ;
    }

    handleCategory(event){
        this.setState({category:event.target.value}) ;
    }

    handleHeading(event){
        
        this.setState({heading:event.target.value}) ;
    }

    onEditorChange = (value) => {
        this.setState({content:value}) ;
    }

    onSubmit = (event) => {
        event.preventDefault();

        var blogID = this.props.match.params.blogID ;
        var b= this.state.blog.blogHeader ;
        var blogHeader = new BlogHeader(blogID,this.props.match.params.userID,b.creationTime,Date.now(),b.hits,b.heading,b.category,b.likes,b.dislikes) ;
        var blog = new Blog(blogID,blogHeader,this.state.content,this.state.category) ;
        //console.log(content) ;
  
  
        /*if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }*/
        blogService.editBlog(blog)
        .then(()=>this.props.history.push("/user/"+this.props.match.params.userID)) ;

        //navigate to ViewBlog page for this blog
      }


      async componentDidMount(){
            var blogID = this.props.match.params.blogID ;
            await blogService.getBlog(blogID)
            .then(data=>{this.setState({blog:data,creationTime:data.blogHeader.creationTime,heading:data.blogHeader.heading,category:data.category,content:data.body,isLoading:false})}) ;
      }

      render(){
          if(this.state.isLoading)
            return null ;
          return(
            <div>
                <NavBar />
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <input 
                    value={this.state.category}
                    type="text" 
                    placeholder="Category"
                    onChange={this.handleCategory} 
                >
                </input>
                <textarea
                    value={this.state.heading}
                    placeholder="Heading or Title"
                    onChange={this.handleHeading}
                />
                <div style={{ textAlign: 'center' }}>
                    <Typography level={2} > Editor</Typography>
                </div>
                <QuillEditor
                    placeholder={"Start Posting Something"}
                    onEditorChange={this.onEditorChange}
                    content={this.state.blog.body}
                />
                
                <form ref={SubButton} onSubmit={this.onSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
          );
      }
}

export default withRouter(EditBlog) ;

