import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import MenuImg from '../images/bcg/menuBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={MenuImg}>
    <Banner title = "Menu" subtitle = {'lets dig in'}></Banner>
    </PageHeader>
  </Layout>
)


export default MenuPage
