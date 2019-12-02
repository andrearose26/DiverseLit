import React from "react";

import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer'

function About() {

    return(
        <div className="aboutPage">
            <header>
                <Nav/>
                <Hero/>
            </header>

            <main className='wrapper aboutSection'>
                <h2 className="sectionTitle">About Diverse Lit</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo aperiam facilis adipisci voluptate? Accusantium perspiciatis quae culpa assumenda, repellat dolores quidem tempore, eaque, itaque reiciendis commodi beatae iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magni ullam libero beatae quas. Ex corrupti maxime natus placeat odit alias eligendi rerum qui sapiente molestias. Aperiam aliquid minus, culpa sit nemo repellat ab nulla reiciendis deleniti consequatur exercitationem dolor aut. Aspernatur deleniti similique et dolor provident minus! Quisquam!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae saepe fuga pariatur quis quae amet doloremque culpa corrupti ea accusamus! Sunt dolore sequi officia numquam sint adipisci at optio obcaecati exercitationem, suscipit harum soluta quia dolorem deleniti voluptas labore voluptatem odio dolorum molestiae, iure magni neque quam! Veniam, eum asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque aspernatur repellendus id cumque corporis aliquam eveniet in quasi placeat ab libero, saepe maiores itaque?</p>

            </main>

            <Footer />
        </div>
    )
}

export default About;