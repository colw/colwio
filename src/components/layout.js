import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'
import 'typeface-raleway'
import 'sanitize.css'

import Header from './header'

injectGlobal`
  html {
    font-family: Raleway, sans-serif;
    font-size: 100%;
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
        site {
          siteMetadata {
            title
          }
        }
        allLinksYaml {
          edges {
            node {
              title
              link
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} links={data.allLinksYaml.edges.map(x => x.node)} />
        <ContentWrapper>{children}</ContentWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
