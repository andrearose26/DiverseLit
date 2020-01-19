import React from "react";

import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';

const About = () => (

    <div className = "aboutPage">
        <header>
            <Nav />
            <Hero />
        </header>

        <main className='aboutSection'>
            <h2 className="sectionTitle">What is Diverse Lit?</h2>

            <p>Diverse Lit is a pilot project created by <a href="http://www.andrealacson.com/">Andrea Lacson</a> during the Web Development Bootcamp at Juno College of Technology.</p>
            <p>By default, Diverse Lit is a tool that makes books by diverse authors easy to find. It is a hope that one day, most underrepresented readers will be able to find a story like theirs through this website.</p>

        </main>

        <Footer />
    </div>
);

export default About;