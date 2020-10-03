import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav id="nav-main">
    <ul className="menu">
      <li><Link activeClassName="active" to="/">Home</Link></li>
      <li><Link activeClassName="active" to="/demo/">Demo</Link></li>
      <li><Link activeClassName="active" to="/404/">404</Link></li>
    </ul>
  </nav>
)

export default Menu
