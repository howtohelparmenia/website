import React from "react"

import Index from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/elements/Hero";

import {
  Link
} from "gatsby";

const NotFoundPage = () => (
  <Index>
    <Seo title="Page Not Found" />
    <Hero>
      <h1>Page Not Found</h1>
      <p>The page you requestsed could not be found.</p>
      <p><Link to="/">Click here</Link> to go back to the home page.</p>
    </Hero>
  </Index>
)

export default NotFoundPage
