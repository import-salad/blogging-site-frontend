import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import BlogService from "../services/BlogService.js";

import NavBar from "./navigation/NavBar.js";
import SideBar from "./navigation/SideBar.js";
import Pagination from "./pagination/Pagination.js";
import PostList from "./posts/PostList.js";

const blogService = new BlogService() ;

class Dashboard extends Component
{
    constructor(props){
        super(props) ;
        this.state={
            posts:[],
            postsPerPage:5,
            currentPage:1,
            isLoading:true

        }
    }

    paginate = (number) =>
	{
		this.setState(
			{
				currentPage: number
			}
		)
    }
    
    async componentDidMount(){
        await blogService.getUserBlogs(this.props.match.params.userID)
        .then(data=>{this.setState({posts:data,isLoading:false})}) ;
    }

    render()
    {
        if(this.state.isLoading)
            return null ;

        var indexOfLastPost  = this.state.currentPage * this.state.postsPerPage;
        var indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        var onPagePosts 	 = this.state.posts.slice(indexOfFirstPost,indexOfLastPost);
        return(

            <div className="dashboard">
                <NavBar isUserLogged={false} />
                <Container
                    style = 
                    {
                        {
                            maxWidth: "90%",
                            marginLeft: "0px",
                            marginRight: "0px",
                            marginTop: "10px"
                        }
                    }
                >
                    <Row>
                        <SideBar userID= {this.props.match.params.userID}/>
                        <Col>
                            {"USER-ID: " + this.props.match.params.userID}
                        </Col>
                    </Row>
                    <PostList posts={onPagePosts} userID={this.props.match.params.userID}/>
				<Pagination totalPosts={this.state.posts.length} postsPerPage={this.state.postsPerPage} paginate={this.paginate}/>
                </Container>
            </div>
        );
    }
}

export default Dashboard;