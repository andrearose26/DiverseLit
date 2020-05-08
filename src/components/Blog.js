import React from "react";
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';

import blogThumbnail1 from '../assets/blog/thumbnails/blogThumbnail1.jpg';
import blogThumbnail2 from '../assets/blog/thumbnails/blogThumbnail2.jpg';
import blogThumbnail3 from '../assets/blog/thumbnails/blogThumbnail3.jpg';

const Blog = () => (
  <div className="blogPage">
    <header>
      <Nav />
      <Hero />
    </header>

    <main className="wrapper">
      <h1 className="blogTitle">Blog</h1>
      <div className="blogThumbnails">

        <div className="blogThumbnail">
          <div className="hover-button">
            <img src={blogThumbnail1} alt="alt text"/>
          </div>
          <div className="hoverInfo">
            <p className="moreDetails">Book Details →</p>
          </div>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>
        <div className="blogThumbnail">
          <img src={blogThumbnail2} alt="alt text"/>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>
        <div className="blogThumbnail">
          <img src={blogThumbnail3} alt="alt text"/>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>

        <div className="blogThumbnail">
          <img src={blogThumbnail1} alt="alt text"/>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>
        <div className="blogThumbnail">
          <img src={blogThumbnail2} alt="alt text"/>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>
        <div className="blogThumbnail">
          <img src={blogThumbnail3} alt="alt text"/>
          <h3>Blog Post Title</h3>
          <div className="blogThumbnailStats">
            <p>By: Andrea Lacson</p>
            <p>September 26, 2019</p>

          </div>
        </div>
      </div>

    </main>

    <Footer />
  </div>
);

export default Blog;