import React, {Component} from "react";

class Pagination extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            pageNumbers: [],
        }
    }

    componentWillMount()
    {
        
    }

    render()
    {
        var totalPosts    = this.props.totalPosts;
        var postsPerPage  = this.props.postsPerPage;

        this.state.pageNumbers = [];
        for(var i=1;i<=Math.ceil(totalPosts / postsPerPage);i++)
        {
//          console.log(i);
            this.state.pageNumbers.push(i);
        }

        return(
            <nav>
                <ul className="pagination">
                    {
                        this.state.pageNumbers.map(
                            (number) =>
                            {
                                return(
                                    <li key={number} className="page-item">
                                        <a 
                                            className = "page-link"
                                            style = 
                                            {
                                                {
                                                    color: (this.props.currentPage === number)?"red":"black"
                                                }
                                            }
                                            onClick = 
                                            {
                                                () => this.props.paginate(number)
                                            }
                                        >
                                            {number}
                                        </a>
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
            </nav>
        );
    }
}

export default Pagination;