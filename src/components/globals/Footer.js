import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'


export default class Footer extends Component {

  state = {
    icons: [
      { id: 0,
        path: 'https://www.facebook.com',
        icon: <FaFacebook className="icon facebook-icon" />
      },
  
      { id: 1,
        path: 'https://www.instagram.com',
        icon: <FaInstagram className="icon instagram-icon" />
      },
      { id: 2,
        path: 'https://www.twitter.com',
        icon: <FaTwitter className="icon twitter-icon" />
      }
      ]
  }
  render() {
    return (
      <FooterWrapper>
        <div className ="title">eatery</div>
        <div className ="icons">
          {this.state.icons.map(item => {
              <a 
                href={item.path}  
                key={item.id} 
                target="_blank" 
                rel="noopener noreferrer">
                    {item.icon}
              </a>
          })}
      </div>
      <p className="copyright">&copy; 2019 eatery</p>
      </FooterWrapper>
    )
  }
}
  const FooterWrapper = styled.footer `
  padding:2rem 0;
  background : ${styles.colors.mainBlack};
 //color: ${styles.colors.mainYellow};

  .icons {
    width:10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
      }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align:center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({color:`${styles.colors.mainYellow}`})};
  }

`