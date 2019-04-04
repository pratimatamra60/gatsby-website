import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'


export default class NavbarLinks extends Component {
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
      <IconWrapper open={this.props.navbarOpen}>
          {this.state.icons.map(item => {
            return(
              <a href={item.path}  key={item.id} target="_blank" rel="noopener noreferrer">
                  {item.icon}
              </a>
            )
          })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`

.icon {
  font-size: 1.3rem;
  cursor: pointer;
  ${styles.transFunction(undefined, '2s')};
}
.facebook-icon {
  color:#3b579d;
}
.twitter-icon {
  color: #3ab7f0;
}
.instagram-icon {
  color: #da5f53;
}
.icon:hover {
  color: ${styles.colors.mainYellow};
}
  display: none
  @media (min-width:768px) {
      display: flex;
      width: 10rem;
      justify-content: space-around;
  }
`