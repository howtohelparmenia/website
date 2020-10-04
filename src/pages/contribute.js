import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container";
import Hero from "../components/elements/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Contribute" />
    <Hero>
      <h1>Contribute</h1>
      <p>Send ideas, feedback and materials</p>
    </Hero>
    <Container>
      <h3>Ideas and Feedback</h3>
      <p>This is a community driven website. If you have any ideas or want to contribute in another way, please get in touch</p>
      <p>For technical people out there: this website is built with GatsbyJS (static site builder based on React) and is available on Github. You are more than welcome to create issues and submit pull requests. If you need help creating your first PR, check out this article or get in touch.</p>
      <p>Any help and contributions are welcome. There is no other purpose to this website than to help Armenia.</p>
      <p>Let's improve this site over time so everyone with energy, time or resources can choose something productive to do.</p>
      <h3>Materials and Examples</h3>
      <p>If you have materials such as documents, banners, posters, infographics, etc. you would like to share here, please get in touch. I am working on building a new section on the site where this information can be available and easily searchable.</p>
      <p>Thank you for reading.</p>
    </Container>
  </Layout>
)

export default IndexPage
