import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
          <div className="footer wrapper">
            <a href="https://www.booknetcanada.ca/biblioshare">
              Data provided by BNC Biblioshare
            </a>
            {/* <a href="http://www.andrealacson.com/">© Andrea Lacson</a> */}
            <a href="#app">Back to Top
            </a>
          </div>
        );
    }
}

export default Footer;