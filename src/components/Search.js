import React, {Component} from "react";

import NavBar from "./navigation/NavBar.js";
import PostList from "./posts/PostList.js";
import Pagination from "./pagination/Pagination.js";

const library = [

    {
        ID: 24,
        name: "Stacks",
        category: "Data Structures",
        body: "This is an article on stacks."
    },
    {
        ID: 25,
        name: "Queues",
        category: "Data Structures",
        body: "This is an article on queues."
    },
    {
        ID: 26,
        name:  "Insertion Sort",
        category: "Algorithms",
        body: "This is an article on insertion sort."
    },
    {
        ID: 27,
        name: "Merge Sort",
        category:"Algorithms",
        body: "This is an article on merge sort."
    }

];

class Search extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            category: "",
            posts: [],
            filteredPosts: [],
            filter: "",
            currentPage: 1,
            postsPerPage: 1
        }
    }

    updateCategory = (e) =>
    {
        this.setState(
            {
                category: e.target.value
            }
        );
    }

    updateFilter = (e) =>
    {
        this.updatePosts(e.target.value);
    }

    updatePosts = (filter) =>
    {
        var keyword = filter;
        var postList = [];

        this.state.posts.forEach(
            (post) =>
            {
                if(!(post.name.indexOf(keyword) === -1))
                    postList.push(post);
            }
        )
        
        this.setState(
            {
                filteredPosts: postList,
                currentPage: 1
            }
        )
    }

    submitRequest = (e) =>
    {
        var postList = [];
        const category = this.state.category;

        library.forEach(
            (post) =>
            {
                if(post.category === category)
                    postList.push(post);
            }
        );

        this.setState(
            {
                posts: postList,
                filteredPosts: postList,
                currentPage: 1
            }
        );
    }

    paginate = (number) =>
    {
        this.setState(
            {
                currentPage: number
            }
        );
    }

    render()
    {
//      console.log(this.state.posts.length + " " + this.state.postsPerPage);
        var indexOfLastPost  = this.state.currentPage * this.state.postsPerPage;
        var indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        var currentPosts 	 = this.state.filteredPosts.slice(indexOfFirstPost,indexOfLastPost);

        return(

            <div className="search">
                <NavBar
                    isUserLogged={false}
                />
                <div className="drop-down-menu">
                    {"Pick a Category: "}
                    <select value={this.state.category} onChange={this.updateCategory}>
                        <option value=""></option>
                        <option value="Data Structures">Data Structures</option>
                        <option value="Algorithms">Algorithms</option>
                    </select>
                    <button onClick={this.submitRequest}>
                        Submit
                    </button>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" onChange={this.updateFilter}/>
                </div>
                <div className="body">
                    {
                        (this.state.category === null)?null:(<PostList posts={currentPosts}/>)
                    }
                    <Pagination 
                        totalPosts = {this.state.filteredPosts.length}
                        postsPerPage = {this.state.postsPerPage}
                        currentPage = {this.state.currentPage}
                        paginate = {this.paginate}
                    />
                </div>
            </div>
        );
    }
}

export default Search;