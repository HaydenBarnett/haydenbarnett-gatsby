import { Link } from "gatsby"
import React from "react"

import Dribbble from "../images/dribbble.svg"
import GitHub from "../images/github.svg"
import LinkedIn from "../images/linkedin.svg"
import Email from "../images/email.svg"

const Header = () => (
  <div id="section-header">
    <div className="container container-sm">
      <div className="row">
        <div className="col-md-6">
          <div id="logo">
            <Link to="/">Hayden Barnett</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="social">
            <a href="https://dribbble.com/haydenbarnett" target="_blank" rel="noreferrer">
              <Dribbble width="16" height="16" />
            </a>
            <a href="https://github.com/haydenbarnett" target="_blank" rel="noreferrer">
              <GitHub width="16" height="16" />
            </a>
            <a href="https://www.linkedin.com/in/haydenbarnett" target="_blank" rel="noreferrer">
              <LinkedIn width="16" height="16" />
            </a>
            <a href="mailto:hello@haydenbarnett.com" target="_blank" rel="noreferrer">
              <Email width="16" height="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
