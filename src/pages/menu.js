import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa';


import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>This is Menu page</h3>
  </Layout>
)


export default MenuPage
