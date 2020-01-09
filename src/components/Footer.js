import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <div className="footer">
    <div className="wrapper">
      <div className="attribution">
        <p>
          Created by <a className="attributionLink" href="http://www.andrealacson.com"> {" "}Andrea Lacson</a>
        </p>

        <p>
          Data provided by
          <a className="attributionLink" href="https://www.booknetcanada.ca/biblioshare"> {" "} BNC Biblioshare</a>
        </p>
      </div>
      <a className="backToTop" href="#nav">
        <FontAwesomeIcon icon="arrow-up" />
      </a>
    </div>
  </div>
);

export default Footer;