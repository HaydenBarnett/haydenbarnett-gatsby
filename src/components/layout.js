import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
