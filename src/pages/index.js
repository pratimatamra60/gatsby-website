import React from "react"
//import styled from "styled-components";
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeHeader, Banner, BannerButton} from "../utils"
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponent/QuickInfo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
    <Banner title ="eatery" subtitle="Abcd street- AbcdCity, LA">
    <BannerButton style = {{margin:'2rem auto'}}>Menu</BannerButton>
    </Banner>
    </HomeHeader>
    <QuickInfo></QuickInfo>
  </Layout>
)


export default IndexPage
