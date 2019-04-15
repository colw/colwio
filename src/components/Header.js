import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPenSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faPenSquare, faEnvelope)

const HeaderWrapper = styled.div`
  background: transparent;
  margin-bottom: 1.5rem;
  margin: 0 auto;
  max-width: 720px;
  padding: 1.45rem 1.0875rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  display: inline-block;
  font-size: 2rem;
  color: rgb(30, 174, 219);
`

const Icon = ({ title, link, icon }) => (
  <IconWrapper>
    <a href={link} aria-label={title}>
      <FontAwesomeIcon icon={icon.split(' ')} />
    </a>
  </IconWrapper>
)

const MainTitle = styled.h1`
  padding: 0;
  margin: 0;
  display: inline-block;
  font-weight: 300;
  font-size: 3.5rem;
  a {
    text-decoration: none;
    color: black;
  }
`

const SubTitle = styled.small`
  margin-top: 2rem;
  display: inline-block;
  font-weight: 200;
  font-size: 1.4rem;
  opacity: 0.7;
`

const HeaderList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  li {
    display: inline-block;
    padding-right: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-weight: 500;
  }
`

const Header = ({ siteTitle, subTitle, links }) => {
  return (
    <HeaderWrapper>
      <MainTitle>
        <Link to="/">{siteTitle}</Link>
        <br />
        <SubTitle>{subTitle}</SubTitle>
      </MainTitle>
      <HeaderList>
        {links.map(x => (
          <li key={x.title}>
            <Icon {...x} />
          </li>
        ))}
      </HeaderList>
    </HeaderWrapper>
  )
}

export default Header
