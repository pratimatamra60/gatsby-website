/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/globals/navbar"
import "./layout.css"
//import "./bootstrap.min.css"
const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar/>
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
