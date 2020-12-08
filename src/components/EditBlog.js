import QuillEditor from './editor/quillEditor'
import React, { useState } from 'react'
import { Typography } from 'antd';
import BlogHeader from '../model/BlogHeader';
import Blog from '../model/Blog';
import BlogService from '../services/BlogService';
import NavBar from './navigation/NavBar';

//const { Title } = Typography;

const SubButton = React.createRef() ;
const blogService = new BlogService() ;

class AddBlog extends React.Component{
    constructor(props){
        super(props) ;
        this.state = 
        {
            username: "",
            heading: "",
            category: "",
            content: "",
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
        //console.log("submitPressed") ;
        var blogHeader = new BlogHeader("",this.props.match.params.userID,Date.now(),Date.now(),0,this.state.heading,this.state.category) ;
        var blog = new Blog("",blogHeader,this.state.content,this.state.category) ;
        //console.log(content) ;
  
  
        /*if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }*/
        blogService.addBlog(blog)
        .then(this.setState({heading:"",category:"",content:""})) ;

        //navigate to ViewBlog page for this blog
      }


      render(){
          return(
            <div>
                <NavBar />
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <input 
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
                />
                
                <form ref={SubButton} onSubmit={this.onSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
          );
      }
}

export default AddBlog ;
