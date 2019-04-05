import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
    <Banner title = "Contact Us" subtitle ="Lets be in touch"></Banner>
    </PageHeader>
  </Layout>
)


export default MenuPage
