import React, {Component} from 'react';

class AllBooks extends Component {

    render(){
        return(
            <div className='books'>
                <ul>
                    {this.props.bookImg.map((image, i) => {
                        const title = this.props.bookTitles[i];
                        const author = this.props.bookAuthors[i]
                        return (
                            <li key={i}>
                                <img src={image} alt= {title + " by " + author}className="bookCover" />
                                <div className="bookText">
                                    <h2>{title}</h2>
                                    <h3>{author}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AllBooks;