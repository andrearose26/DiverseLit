import React, { Component } from 'react';
import Hero from './Hero';
import Filter from './Filter';

class Header extends Component {

    render(){
        return(
            <header>
                <nav className="fixedHeader">
                    <div className="wrapper"> 
                        <h1 className="title">Diverse Lit<span>.</span></h1>

                        <ul>
                            <li>
                                <span className="hover"> <a href="#">About</a></span>
                            </li>
                            <li>
                                <span className="hover"> <a href="#">Blog</a></span>
                            </li>
                            <li>
                                <span className="hover"> <a href="#categories">Browse</a></span>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Hero />
                <div className="categories" id="categories">
                    <Filter 
                        getFilteredBooksProps={this.props.getFilteredBooksProps}
                    />
                </div>
            </header>
        )
    }
}

export default Header;