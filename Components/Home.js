import React, {Component} from "react";

import NavBar from "./navigation/NavBar.js";
import ShowPosts from "./posts/ShowPosts.js";
import Pagination from "./pagination/Pagination.js";

const Library = 
[
    {
      name: "Star Wars"
    },
    {
      name: "Harry Potter"
    },
    {
      name: "Lord of the Rings"
    },
    {
      name: "Star Trek"
    },
    {
      name: "The Fault in Our Stars"
    },
    {
      name: "Number the Stars"
    },
    {
      name: "Blue"
    },
    {
      name: "Act Da Fool"
    },
    {
      name: "The Gilded Cage"
    },
    {
      name:
        "To Get to Heaven First You Have to Die (Bihisht faqat baroi murdagon)"
    },
    {
      name: "Lebanon"
    },
    {
      name: "Tenderness"
    },
    {
      name: "It"
    },
    {
      name: "Locked Out (Enfermés dehors)"
    },
    {
      name: "Waterloo Bridge"
    },
    {
      name: "Set It Off"
    },
    {
      name: "Nil By Mouth"
    },
    {
      name: "Monte Carlo"
    },
    {
      name: "Treasure of the Four Crowns"
    },
    {
      name: "Donnie Darko"
    },
    {
      name: "Cry-Baby"
    },
    {
      name: "Juan of the Dead (Juan de los Muertos)"
    },
    {
      name: "Constant Nymph, The"
    }
];

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            isUserLogged: this.props.isUserLogged,
            posts: Library,
            currentPage: 1,
            postsPerPage: 5,
        };
    }
    
    componentDidMount()
    {
		this.setState(
            {
                posts: Library
            }
        ); 


        if(localStorage.getItem("isUserLogged") === "true")
        {
            this.setState(
                {
                    isUserLogged: true 
                }
            );
        }
        else
        {
            this.setState(
                {
                    isUserLogged: false
                }
            );
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

    render()
    {

		var indexOfLastPost  = this.state.currentPage * this.state.postsPerPage;
		var indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
		var onPagePosts 	 = this.state.posts.slice(indexOfFirstPost,indexOfLastPost);
/*
		console.log(this.state.posts.length);
*/
        return(
            
            <div className="home">
                <NavBar isUserLogged={this.state.isUserLogged}/>
                <ShowPosts posts={onPagePosts}/>
				<Pagination totalPosts={this.state.posts.length} postsPerPage={this.state.postsPerPage} paginate={this.paginate}/>
            </div>
        );
    }
}

export default Home;