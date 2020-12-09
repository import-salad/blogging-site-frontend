import React, {Component} from "react";

import NavBar from "./navigation/NavBar.js";

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

class Post extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            postName: "",
            postBody: ""
        }
    }

    componentDidUpdate()
    {
        if(this.props.isUserLogged === false)
        {
            this.props.history.push("/");
        }
    }

    userLoggedOut = () =>
    {
        this.props.userLoggedOut();
    }

    render()
    {
//      var postName = "";
//      var postBody = "";
        var postID = this.props.match.params.postID;
        for(var i=0;i<library.length;i++)
        {
            if(parseInt(postID) === library[i].ID)
            {
                this.state.postName = library[i].name;
                this.state.postBody = library[i].body;

                break;
            }
        }

        return(
            <div className="post">
                <NavBar 
                    isUserLogged = {this.props.isUserLogged}
                    userID = {this.props.userID}
                    userLoggedOut = {this.userLoggedOut}
                />
                {
                //  this.props.match.params.postID
                }
                <div 
                    className = "post-header"
                    style = 
                    {
                        {
                            textAlign: "center",
                            fontWeight: "bold"
                        }
                    }
                >
                    {this.state.postName}
                </div>
                <div className = "post-body">
                    {this.state.postBody}
                </div>
            </div>
        );
    }
}

export default Post;