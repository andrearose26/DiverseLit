import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AllBooks extends Component {

    render(){
        return(
            <div className='books'>
                <ul>
                    {this.props.bookImg.map((image, i) => {
                        const title = this.props.bookTitles[i];
                        const author = this.props.bookAuthors[i]
                        const isbn = this.props.bookISBNs[i]
                        return (
                            <li id = {isbn} key={i}>
                                <Link to= {{ pathname: `/${isbn}`, 
                                    state: {
                                        bookISBN: isbn,
                                        bookAuthor: author,
                                        bookTitle: title,
                                    }
                                }}>
                                    <div className="hover-button">
                                        <img src= {image} alt= {title + " by " + author} className="bookCover" />
                                        <div className="hoverInfo">
                                            <p className="moreDetails">Book Details →</p>
                                        </div>
                                    </div>
                                    <div className="bookText">
                                        <p className= "title">{title}</p>
                                        <p className= "author">{author}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AllBooks;