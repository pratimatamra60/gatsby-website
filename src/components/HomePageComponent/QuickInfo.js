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
            Sed ut tiae consequatur, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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