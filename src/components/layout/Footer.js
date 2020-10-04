import React from "react"

import {
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/all";

import Container from "./container"

const Footer = () => (
  <Container id="footer">
    <p>Ideas? Feedback? Get in touch at HowToHelpArmenia [at] Gmail dot com.</p>
    <p id="social">
      <a href="https://github.com/howtohelparmenia" target="_blank" rel="noopener noreferrer"><FaGithub /><span className="visually-hidden">How to Help Armenia on Github</span></a>
      &nbsp;
      <a href="https://www.instagram.com/howtohelparmenia" target="_blank" rel="noopener noreferrer"><FaInstagram /><span className="visually-hidden">How to Help Armenia on Instagram</span></a>
      &nbsp;
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /><span className="visually-hidden">How to Help Armenia on Twitter</span></a>
    </p>
  </Container>
)

export default Footer
