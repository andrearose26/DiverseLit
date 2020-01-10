import React from 'react';
import Nav from './Nav';

const NotFound = () => (
    <React.Fragment>
        <header>
            <Nav />
        </header>
        <div className="notFound">
            <h1>The page you were looking for was not found.</h1>
            <h2>Please return to the homepage!</h2>
        </div>
    </React.Fragment>
);

export default NotFound;