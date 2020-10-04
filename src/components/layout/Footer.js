import React from "react"

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/all";

import Container from "./container"

const Footer = () => (
  <>
    <Container id="footer">
      <p>Page maintained by <a href="https://github.com/aramboyajyan" target="_blank" rel="noopener noreferrer">Aram Boyajyan</a>.</p>
      <p>Ideas? Feedback? Get in touch at HowToHelpArmenia [at] Gmail dot com.</p>
      <p id="social">
        <a href="https://github.com/howtohelparmenia" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        &nbsp;
        <a href="https://www.instagram.com/howtohelparmenia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        &nbsp;
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        &nbsp;
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </p>
    </Container>
  </>
)

export default Footer
