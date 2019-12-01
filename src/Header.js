import React, { Component } from 'react';
import Hero from './Hero';
import Filter from './Filter';

class Header extends Component {

    render(){
        return(
            <header>
                <nav className = "fixedHeader">
                    <div className="wrapper"> 
                        <h1 className="title">Diverse Lit<span>.</span></h1>

                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Browse</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Hero />
                <div className="categories">
                    <Filter 
                        getFilteredBooksProps={this.props.getFilteredBooksProps}
                    />
                </div>
            </header>
        )
    }
}

export default Header;