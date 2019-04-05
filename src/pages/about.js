import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"
//import { FaBeer } from 'react-icons/fa';


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import AboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={AboutImg}>
    <Banner title = "About Us" subtitle ="A Little about us"></Banner>
    </PageHeader>
  </Layout>
)


export default AboutPage
