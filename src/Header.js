import React, { Component } from 'react';
import Filter from './Filter'

class Header extends Component {

    render(){
        return(
            <header>
                <h1 className="title">DiverseLit</h1>
                <div className="categories">
                    <Filter />
                </div>
            </header>
        )
    }
}

export default Header;