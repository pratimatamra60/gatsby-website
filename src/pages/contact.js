import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader} from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
    <h3>This is contact page</h3>

    </PageHeader>
  </Layout>
)


export default MenuPage
