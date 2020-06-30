import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import profile from "../images/hayden-intro-profile@2x.png"
import Squiggle from '../images/squiggle.inline.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end developer &amp; digital designer" />
    <div className="section-intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <div className="intro-image">
                <img src={profile} width="450" height="475" alt="" />
              </div>
              <div className="intro-title animated fadeInLeft delay-1">
                <h1 className="intro-heading">Front-end developer & digital designer.</h1>
                <p className="intro-position">Director of <a className="underline" href="https://withsurge.com" target="_blank" rel="noreferrer">Surge</a>&nbsp;&nbsp;<span className="divider">/</span>&nbsp;&nbsp;Developer at <a className="underline" href="https://www.tyro.com" target="_blank" rel="noreferrer">Tyro</a></p>
                <p className="intro-location">Sydney, Australia</p>
              </div>
              <div className="squiggle-container">
                <Squiggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-sm">
        <div className="row">
          <div className="col-12">
            <div className="intro-buttons">
              <a className="btn btn-secondary animated fadeInLeft delay-2" href="https://www.linkedin.com/in/haydenbarnett">LinkedIn</a>
              <a className="btn btn-primary animated fadeInLeft delay-3" href="mailto:hello@haydenbarnett.com">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
