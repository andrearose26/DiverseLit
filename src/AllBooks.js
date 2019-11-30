import React, {Component} from 'react';
import Covers from './Covers';
import Titles from './Titles';
import Authors from './Authors';



class AllBooks extends Component {

    render(){
        return(
            <div className='books'>
                <ul>
                    <Covers
                        bookImg={this.props.bookImg}
                    />

                    <Titles/>
                    <Authors/>
                </ul>
            </div>
        )
    }
}

export default AllBooks;