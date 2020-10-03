import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container";
import Hero from "../components/elements/Hero";
import {Tile, Tiles} from "../components/elements/Tiles";
import ArmenianCoatOfArms from "../components/images/ArmenianCoatOfArms";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <p id="coat-of-arms">
        <ArmenianCoatOfArms />
      </p>
      <h1>How to Help Armenia</h1>
      <p>Collection of resources and ideas for everyone</p>
    </Hero>
    <Container>
      <Tiles>
        <Tile>
          <h2>Help with Time</h2>
          <ul>
            <li>Educate yourself and educate others around you</li>
            <li>Post facts on social media</li>
            <li>Expose and call out fake claims</li>
            <li>Report hate speech</li>
            <li>Get in touch with Armenian online communities and see where can your skills be used</li>
          </ul>
        </Tile>
        <Tile>
          <h2>Help with Voice</h2>
          <ul>
            <li>Speak up on social media. Spread the truth and engage in communication with others.</li>
            <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens.</li>
          </ul>
        </Tile>
        <Tile>
          <h2>Help with Money</h2>
          <ul>
            <li>Speak up on social media. Spread the truth and engage in communication with others.</li>
            <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens.</li>
          </ul>
        </Tile>
        <Tile>
          <h2>Help with Knowledge</h2>
          <p>Options are endless. Click here to see the breakdown by resource for more details.</p>
          <ul>
            <li>Speak up on social media. Spread the truth and engage in communication with others.</li>
            <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens.</li>
          </ul>
        </Tile>
      </Tiles>
    </Container>
  </Layout>
)

export default IndexPage
