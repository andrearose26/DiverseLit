import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="fixedHeader" id="nav">
    <div className="wrapper">
      <h1 className="title">

        <Link to="/">
          Diverse Lit<span>.</span>
        </Link>
      </h1>
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

export default Nav;