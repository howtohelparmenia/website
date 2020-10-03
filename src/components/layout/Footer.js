import React from "react"

import { FaFacebook, FaTwitter } from "react-icons/all";

import Container from "./container"

const Footer = () => (
  <>
    <Container id="footer-main-wrap">
      <p>This is the footer</p>
      <p>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        &nbsp;
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </p>
    </Container>
    <Container id="footer-copyrights-wrap">
      &copy; { (new Date().getFullYear()) } Project Name
    </Container>
  </>
)

export default Footer
