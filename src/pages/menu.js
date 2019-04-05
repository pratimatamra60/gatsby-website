import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader} from '../utils'
import MenuImg from '../images/bcg/menuBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={MenuImg}>
    <h3>This is menu page</h3>

    </PageHeader>
  </Layout>
)


export default MenuPage
