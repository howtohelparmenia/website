import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container";
import Hero from "../components/elements/Hero";
import {
  Tile,
  Tiles,
  TileTitle,
  TileContent,
  TileFooter,
} from "../components/elements/Tiles";
import ArmenianCoatOfArms from "../components/images/ArmenianCoatOfArms";

import {
  FaBlackTie, FaBook, FaBookOpen,
  FaBullhorn, FaCode, FaDollarSign, FaEdit,
  FaHistory, FaHospital, FaHourglassHalf,
  FaLanguage, FaMusic, FaPaintBrush, FaPenFancy,
} from "react-icons/all";

const IndexPage = () => (
  <Layout>
    <SEO title="Central" />
    <Hero>
      <p id="coat-of-arms">
        <ArmenianCoatOfArms />
      </p>
      <h1>How to Help Armenia</h1>
      <p>Collection of resources and ideas for everyone</p>
    </Hero>
    <Container>
      <p>Choose how you can help to see different suggestions:</p>
      <p aria-hidden="true">
        <button>With Resources</button>
        <button>With Knowledge</button>
      </p>
      <Tiles>
        <Tile>
          <TileTitle><FaDollarSign /> Help with Money</TileTitle>
          <TileContent>
            <p>Donate to official funds where you know that the money will be well used.</p>
            <p>Give as much as you can now and consider donating on a monthly basis.</p>
            <ul>
              <li><a href="https://www.himnadram.org/en" target="_blank" rel="noopener noreferrer">Hayastan All Armenian Fund</a></li>
              <li><a href="https://www.1000plus.am/en" target="_blank" rel="noopener noreferrer">Insurance Foundation for Servicement</a></li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaHourglassHalf /> Help with Time</TileTitle>
          <TileContent>
            <ul>
              <li>Educate yourself and educate others around you</li>
              <li>Post facts on social media</li>
              <li>Share news articles and spread the news</li>
              <li>Expose and call out fake claims</li>
              <li>Report hate speech</li>
              <li>Get in touch with Armenian online communities to see where your skills can be used</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaBullhorn /> Help with Voice</TileTitle>
          <TileContent>
            <ul>
              <li>Speak up on social media. Spread the truth and engage in communication with others.</li>
              <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens.</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaBookOpen /> Help with Knowledge</TileTitle>
          <TileContent>
            <p>Options are endless. Click here to see the breakdown by resource for more details.</p>
            <ul>
              <li>Speak up on social media. Spread the truth and engage in communication with others.</li>
              <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens.</li>
            </ul>
          </TileContent>
        </Tile>

        <Tile>
          <TileTitle><FaPaintBrush /> Designers and Creatives</TileTitle>
          <TileContent>
            <p>Design materials that can be shared, printed and showcased:</p>
            <ul>
              <li>Create infographics</li>
              <li>Create banners for websites</li>
              <li>Create posters for printing</li>
              <li>Create presentations</li>
              <li>Shoot videos that promote Armenia</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaCode /> Developers</TileTitle>
          <TileContent>
            <p>Get involved with other projects and help Armenian websites:</p>
            <ul>
              <li>Get in touch with news outlets and see if they can use your skills, even as an external consultant</li>
              <li>Get in touch with online Armenian communities and see if there are projects or ideas where your skills can be useful</li>
              <li>Infosec experts: evaluate Armenian websites, report and document any issues and submit them to the team in a secure manner</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaMusic /> Musicians</TileTitle>
          <TileContent>
            <p>Compose and perform pieces that promote Armenia and preserve its culture.</p>
            <ul>
              <li>Create pieces that promote Armenia</li>
              <li>Preserve Armenian history by using historical elements in your work</li>
              <li>Create pieces to lift the morale of Armenian troops and make them proud for protecting the country</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaBlackTie /> Business People</TileTitle>
          <TileContent>
            <ul>
              <li>Placeholder</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaBook /> Students</TileTitle>
          <TileContent>
            <ul>
              <li>Educate yourself and others around you</li>
              <li>Spread the word about this website on social media</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaHistory /> Historians</TileTitle>
          <TileContent>
            <ul>
              <li>Update and maintain Wikipedia pages related to Armenia and its history.</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaLanguage /> Polyglots</TileTitle>
          <TileContent>
            <ul>
              <li>Translate news and what's happening in Armenia</li>
              <li>Write articles in other languages and share them on social media</li>
              <li>Help online news outlets with proofreading and translations</li>
            </ul>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaHospital /> Healthcare Workers</TileTitle>
          <TileContent>
            <p>Placeholder</p>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaPenFancy /> Writers</TileTitle>
          <TileContent>
            <p>Write about Armenia.</p>
          </TileContent>
        </Tile>
        <Tile>
          <TileTitle><FaEdit /> Journalists</TileTitle>
          <TileContent>
            <p>Join the efforts to document what's going on in Armenia right now.</p>
            <ul>
              <li>Find topics that are not well covered and join the efforts</li>
              <li>Research foreign aggression and write about that</li>
            </ul>
          </TileContent>
        </Tile>
      </Tiles>
    </Container>
    <Container>
      <p className="align-center lead">Don't see something? Have an idea? Get in touch!</p>
    </Container>
  </Layout>
)

export default IndexPage
