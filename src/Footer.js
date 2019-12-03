import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
          <div className="footer">
            <div className="wrapper">
              <div className="attribution">
                <a href="http://www.andrealacson.com/">© Andrea Lacson</a>
                <a href="https://www.booknetcanada.ca/biblioshare">
                  Data provided by BNC Biblioshare
                </a>
              </div>
              <a href="#nav">Back to Top
              </a>
            </div>
          </div>
        );
    }
}

export default Footer;