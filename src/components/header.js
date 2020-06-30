import { Link } from "gatsby"
import React from "react"

import dribbble from "../images/dribbble.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"

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
              <img src={dribbble} width="16" height="16" alt="Dribbble" />
            </a>
            <a href="https://github.com/haydenbarnett" target="_blank" rel="noreferrer">
              <img src={github} width="16" height="16" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/haydenbarnett" target="_blank" rel="noreferrer">
              <img src={linkedin} width="16" height="16" alt="LinkedIn" />
            </a>
            <a href="mailto:hello@haydenbarnett.com" target="_blank" rel="noreferrer">
              <img src={email} width="16" height="16" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
