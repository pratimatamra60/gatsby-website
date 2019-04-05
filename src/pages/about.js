import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"
//import { FaBeer } from 'react-icons/fa';


import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageHeader} from '../utils'
import AboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={AboutImg}>
    <h3>This is about page</h3>

    </PageHeader>
  </Layout>
)


export default AboutPage
