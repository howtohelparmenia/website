import React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../components/layout/container";
import Hero from "../../components/elements/Hero";
import {FaChevronLeft} from "react-icons/all";

const VoicePage = () => (
  <Layout>
    <Seo title="Petitions" />
    <Hero>
      <a href="/" className="action"><FaChevronLeft /></a>
      <h1>Petitions</h1>
      <p>Raise your voice for Armenia</p>
    </Hero>
    <Container>
      <h2>For Citizens of United States of America</h2>
      <p>
        <strong>Armenian National Committee of America</strong><br />
        <a href="https://cqrcengage.com/anca/app/write-a-letter?0&engagementId=509436">
          https://cqrcengage.com/anca/app/write-a-letter?0&engagementId=509436
        </a>
      </p>
      <p>
        <strong>White House: Condemn the Aggression of Turkey and Azerbaijan Against Artsakh, Armenia</strong><br />
        <a href="https://petitions.whitehouse.gov/petition/condemn-aggression-turkey-and-azerbaijan-against-artsakh-armenia">
          https://petitions.whitehouse.gov/petition/condemn-aggression-turkey-and-azerbaijan-against-artsakh-armenia
        </a>
      </p>
      <p>
        <strong>March to Justice: Condemn the Aggression of Turkey and Azerbaijan Against Artsakh, Armenia</strong><br />
        <a href="https://marchtojustice.org/condemn-azerbaijan/issue-form/0/0">
          https://marchtojustice.org/condemn-azerbaijan/issue-form/0/0
        </a><br />&nbsp;
      </p>
    </Container>
    <Container>
      <p>
        Aware of similar petitions in other countries? Please send an email.
      </p>
    </Container>
  </Layout>
)

export default VoicePage
