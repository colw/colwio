import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import 'typeface-raleway'
import sanitize from '../style'

import Header from './Header'

const GlobalStyle = createGlobalStyle`
  ${sanitize}
  html {
    font-family: Raleway, sans-serif;
    font-size: 100%;
    line-height: 150%;
  }
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-weight: 300;
    font-size: 42px;
  }
  a {
    color: rgb(30, 174, 219);
    text-decoration: none;
  }

  li {
    margin-bottom: 1rem;
  }

  footer {
    margin: 2rem
    text-align: center;
  }

  .page-wrapper {
    margin: 0 auto;
    max-width: 1350px;
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeaderDataQuery {
        markdownRemark {
          id
          frontmatter {
            title
            subTitle
            meta {
              name
              content
            }
            links {
              icon
              link
              title
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.markdownRemark.frontmatter.title}
          meta={data.markdownRemark.frontmatter.meta}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.markdownRemark.frontmatter.title}
          subTitle={data.markdownRemark.frontmatter.subTitle}
          links={data.markdownRemark.frontmatter.links}
        />
        <GlobalStyle />
        <ContentWrapper>{children}</ContentWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
