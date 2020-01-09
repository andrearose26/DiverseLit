import React, { Component } from 'react';

import Nav from './Nav'
import Hero from './Hero';
import Filter from './Filter';

class Header extends Component {

    render(){
        return (
          <header >
            <Nav />
            <Hero />
            <div className="categories" id="categories">
              <h2>Filter by categories</h2>
              <Filter
                getFilteredBooksProps={this.props.getFilteredBooksProps}
              />
            </div>
          </header>
        );
    }
}

export default Header;