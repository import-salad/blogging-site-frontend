import React, {Component} from "react";
import {Nav} from "reactstrap";

class Pagination extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            pageNumbers: []
        }
    }

    componentDidMount()
    {
/*
        console.log(this.props.totalPosts);
        console.log(this.props.postsPerPage);
*/

        var totalPosts    = this.props.totalPosts;
        var postsPerPage  = this.props.postsPerPage;

        for(var i=1;i<=Math.ceil(totalPosts / postsPerPage);i++)
        {
            console.log(i);
            this.state.pageNumbers.push(i);
        }
    }

    render()
    {

        return(

//          <div>Hello, World!!!</div>
            <nav>
                <ul className="pagination">
                    {this.state.pageNumbers.map(
                        (number) =>
                        (
                            <li key={number} className="page-item">
                                <a onClick={() => this.props.paginate(number)} className="page-link">{number}</a>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        );
    }
}

export default Pagination;