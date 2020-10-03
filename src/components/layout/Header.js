import React from "react"
import Container from "./container";
import Logo from "./logo";
import Menu from "./menu";

const Header = () => (
  <>
    <Container id="logo-wrap">
      <Logo />
    </Container>
    <Container id="nav-main-wrap">
      <Menu />
    </Container>
  </>
)

export default Header
