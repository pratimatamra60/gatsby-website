import React, { Component } from 'react';
import {Section, Title, SectionButton} from '../../utils';
import styled from 'styled-components'
import {Link} from 'gatsby';
import  {styles} from '../../utils';

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message = "let us tell you" title ="our mission"></Title>  
        <QuickInfoWrapper>
            <p className="text">
                To be consistent with data protection laws, we’re asking you to take a 
                moment to review key points of Google’s Privacy Policy. 
                This isn’t about a change we’ve made — but please review some key points. 
                You can revoke your consent at any time with effect for the future.
            </p>

        <Link to="/about/" style = {{textDecoration:'none'}}>
            <SectionButton style = {{margin:'2rem auto'}}>about</SectionButton>  
        </Link> 
        </QuickInfoWrapper>
       
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div `
    width: 90%;
    margin: 2rem auto;
    .text {
        line-height: 2rem;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }
    @media (min-width: 768px) {
        width:70%;
    }
    @media (min-width: 992px) {
        width:60%;
    }
`