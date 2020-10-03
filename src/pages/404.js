import React from "react"

import Index from "../components/index"
import Seo from "../components/other/seo"
import Container from "../components/layout/container";

const NotFoundPage = () => (
  <Index>
    <Seo title="Page Not Found" />
    <Container>
      <h1>Page Not Found</h1>
      <p>The page you requested could not be found.</p>
    </Container>
  </Index>
)

export default NotFoundPage
