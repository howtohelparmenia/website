import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container";
import Hero from "../components/elements/Hero";
import {
  Tile,
  Tiles,
  TileTitle,
  TileContent,
} from "../components/elements/Tiles";
import ArmenianCoatOfArms from "../components/images/ArmenianCoatOfArms";
import {
  Link
} from "gatsby";

import {
  FaBookOpen,
  FaBullhorn, FaCode, FaDollarSign,
  FaHistory, FaHourglassHalf,
  FaLanguage, FaMusic, FaPaintBrush, FaPenFancy,
} from "react-icons/all";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupationOpen: false,
    };
  }

  toggleResourceOccupation(props) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.setState({
      occupationOpen: !this.state.occupationOpen,
    });
  }

  render() {
    const toggleChecked = this.state.occupationOpen;
    return (
      <Layout className={ this.state.occupationOpen ? 'occupation-open' : 'resource-open'}>
        <SEO title="Central" />
        <Hero>
          <ArmenianCoatOfArms />
          <h1>How to Help Armenia</h1>
          <p>Collection of resources and ideas for everyone</p>
        </Hero>
        <Container>
          <p aria-hidden="true" className="align-center">
            <label className="form-switch">
              <span className="filter-resource">By resource</span>
              <input type="checkbox" id="home-toggle" onChange={ () => this.toggleResourceOccupation() } checked={ toggleChecked } />
              <i>&nbsp;</i><span className="filter-occupation">By occupation</span>
            </label>
          </p>
          <Tiles>
            <Tile className="resource-tile">
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
            <Tile className="resource-tile">
              <TileTitle><FaHourglassHalf /> Help with Time</TileTitle>
              <TileContent>
                <ul>
                  <li>Educate yourself and others around you</li>
                  <li>Share news articles and what's going on</li>
                  <li>Post facts on social media</li>
                  <li>Expose and call out fake claims</li>
                  <li>Report hate speech</li>
                  <li>Connect with Armenian online communities to see where your skills can be used</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="resource-tile">
              <TileTitle><FaBullhorn /> Help with Voice</TileTitle>
              <TileContent>
                <ul>
                  <li>Speak up on social media. Spread the truth and engage in communication with others</li>
                  <li>Raise your concerns and sign petitions that benefit Armenia. <Link to="/idea/petitions/">Click here</Link> to see the list of relevant online petitions</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="resource-tile">
              <TileTitle><FaBookOpen /> Help with Knowledge</TileTitle>
              <TileContent>
                <p>Options are endless. <button className="no-styles link" onClick={ () => this.toggleResourceOccupation() }>Click here</button> to see the breakdown by resource for more details.</p>
                <ul>
                  <li>Create educational material that can be shared on social media</li>
                  <li>Raise your concerns and sign petitions that benefit Armenia. Click here to see the list of petitions for US citizens</li>
                </ul>
              </TileContent>
            </Tile>

            <Tile className="occupation-tile">
              <TileTitle><FaPaintBrush /> Designers and Creatives</TileTitle>
              <TileContent>
                <p>Design educational material that can be shared, printed and showcased.</p>
                <ul>
                  <li>Create infographics</li>
                  <li>Create banners for websites</li>
                  <li>Create posters for printing</li>
                  <li>Create presentations</li>
                  <li>Shoot videos that promote Armenia</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="occupation-tile">
              <TileTitle><FaCode /> Developers</TileTitle>
              <TileContent>
                <p>Get involved with other projects and help Armenian websites:</p>
                <ul>
                  <li>Get in touch with news outlets and governmental websites and see if they can use your skills</li>
                  <li>Get in touch with online Armenian communities and see if there are projects or ideas where your skills can be useful</li>
                  <li>Evaluate websites, report and document security issues and submit them to the team in a secure manner</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="occupation-tile">
              <TileTitle><FaMusic /> Artists</TileTitle>
              <TileContent>
                <p>Promote Armenia and preserve its cultural heritage.</p>
                <ul>
                  <li>Create, compose and perform pieces that promote Armenia</li>
                  <li>Preserve Armenian history by using historical elements in your work</li>
                  <li>Create pieces dedicated to the Armenian troops. Make them proud for protecting the country</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="occupation-tile">
              <TileTitle><FaHistory /> Historians</TileTitle>
              <TileContent>
                <p>Provide authority for online articles, Wikis and discussions. Promote knowledge and remind people of what happened in the past.</p>
                <ul>
                  <li>Update and maintain Wikipedia pages related to Armenia and its history</li>
                  <li>Curate the events that happened in the past and that lead us to this point</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="occupation-tile">
              <TileTitle><FaLanguage /> Polyglots</TileTitle>
              <TileContent>
                <p>Use your knowledge to spread the truth and protect Armenian side.</p>
                <ul>
                  <li>Translate news and what's happening in Armenia</li>
                  <li>Write articles in other languages and share them on social media</li>
                  <li>Help online news outlets with proofreading and translations</li>
                  <li>Translate Armenian history books into other languages</li>
                </ul>
              </TileContent>
            </Tile>
            <Tile className="occupation-tile">
              <TileTitle><FaPenFancy /> Writers</TileTitle>
              <TileContent>
                <p>Write about Armenia</p>
                <ul>
                  <li>Include elements from Armenian folklore in your writing</li>
                  <li>Write about Armenia</li>
                </ul>
              </TileContent>
            </Tile>
          </Tiles>
        </Container>
        <Container>
          <p className="align-center lead">More to come. Have an idea? Get in touch!</p>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
