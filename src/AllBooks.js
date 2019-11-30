import React, {Component} from 'react';

class AllBooks extends Component {

    render(){
        return(
            <div className='books'>
                <ul>
                    {this.props.bookImg.map((image, i) => {
                        return (
                            <li key = {i}>
                                <img src={image} alt="" className = 'bookCover' />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AllBooks;