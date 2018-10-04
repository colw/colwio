import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  background: transparent;
  margin-bottom: 1.5rem;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  display: inline-block;
`

const Icon = ({ title, link }) => (
  <IconWrapper>
    <a href={link}>{title}</a>
  </IconWrapper>
)

const MainTitle = styled.h1`
display: inline-block;
  a {
    text-decoration: none;
    color: black;
  }
`

const HeaderList = styled.ul`
  display: inline-block;
  li {
    display: inline-block;
    padding-right: 1rem;
  }
`

const Header = ({ siteTitle, links }) => {
  return (
    <HeaderWrapper>
        <MainTitle>
          <Link to="/">
            {siteTitle}
          </Link>
        </MainTitle>
        <HeaderList>
          {links.map(x => <li key={x.title}><Icon {...x} /></li>)}
        </HeaderList>

    </HeaderWrapper>
  )
}

export default Header
