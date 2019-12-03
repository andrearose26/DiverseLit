import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render(){
        return (

            <nav className="fixedHeader">
                <div className="wrapper"> 
                    <h1 className="title">Diverse Lit<span>.</span></h1>
                     <ul>
                        <Link to="/about">
                            <li>
                                <span className="hover"> About</span>
                            </li>
                        </Link>
                        <Link to="/blog">
                            <li>
                                <span className="hover">Blog</span>
                            </li>
                        </Link>
                        
                        <Link to="/">
                            <li>
                                <span className="hover">Browse</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;