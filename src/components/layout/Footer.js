import React from "react"

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/all";

import Container from "./container"

const Footer = () => (
  <>
    <Container id="footer">
      <p>Page maintained by <a href="https://github.com/aramboyajyan" target="_blank" rel="noopener noreferrer">Aram Boyajyan</a>.</p>
      <p id="social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        &nbsp;
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        &nbsp;
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </p>
    </Container>
  </>
)

export default Footer
