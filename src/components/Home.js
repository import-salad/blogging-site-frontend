import React, {Component} from "react";

import NavBar from "./navigation/NavBar.js";
import PostList from "./posts/PostList.js";
import Pagination from "./pagination/Pagination.js";

/*
const Library = 
[
    {
        ID: 1,
      	name: "Star Wars"
    },
    {
        ID: 2,
      	name: "Harry Potter"
    },
    {
        ID: 3,
      	name: "Lord of the Rings"
    },
    {
        ID: 4,
      	name: "Star Trek"
    },
    {
        ID: 5,
      	name: "The Fault in Our Stars"
    },
    {
        ID: 6,
      	name: "Number the Stars"
    },
    {
        ID: 7,
      	name: "Blue"
    },
    {
        ID: 8,
      	name: "Act Da Fool"
    },
    {
        ID: 9,
      	name: "The Gilded Cage"
    },
    {
        ID: 10,
      	name: "To Get to Heaven First You Have to Die (Bihisht faqat baroi murdagon)"
    },
    {
        ID: 11,
      	name: "Lebanon"
    },
    {
        ID: 12,
      	name: "Tenderness"
    },
    {
        ID: 13,
      	name: "It"
    },
    {
        ID: 14,
      	name: "Locked Out (Enfermés dehors)"
    },
    {
        ID: 15,
      	name: "Waterloo Bridge"
    },
    {
        ID: 16,
      	name: "Set It Off"
    },
    {
        ID: 17,
      	name: "Nil By Mouth"
    },
    {
        ID: 18,
      	name: "Monte Carlo"
    },
    {
        ID: 19,
      	name: "Treasure of the Four Crowns"
    },
    {
        ID: 20,
      	name: "Donnie Darko"
    },
    {
        ID: 21,
      	name: "Cry-Baby"
    },
    {
        ID: 22,
      	name: "Juan of the Dead (Juan de los Muertos)"
    },
    {
        ID: 23,
      	name: "Constant Nymph, The"
    }
];
*/

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

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            posts: [],
            currentPage: 1,
            postsPerPage: 2
        };
    }

    componentWillMount()
    {
		this.setState(
            {
                posts: library
            }
        );
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
//		var indexOfLastPost  = this.state.currentPage * this.state.postsPerPage;
//		var indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
//		var currentPosts 	 = this.state.posts.slice(indexOfFirstPost,indexOfLastPost);

        return(
            
            <div className="home">
                <NavBar 	isUserLogged={false}/>

				{
				/*	
					<div className="debug">
                		<PostList	posts={currentPosts}/>
						<Pagination 
							totalPosts={this.state.posts.length}
							postsPerPage={this.state.postsPerPage}
							paginate={this.paginate}
						/>
					</div>
				*/
				}

				{
					
				}

            </div>
        );
    }
}

export default Home;