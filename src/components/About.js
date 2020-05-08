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
            <h2 className="sectionTitle">The place to find all of your diverse literary needs</h2>

            <p>We work to find books by all kinds of authors - LGBTQIA, people of colour, authors with disabilities and more. Our mission is to make it easier for people to find books by people who are just like them.</p>

        </main>

        <Footer />
    </div>
);

export default About;