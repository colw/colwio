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
        allDataYaml {
          edges {
            node {
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
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.allDataYaml.edges[0].node.title}
          meta={data.allDataYaml.edges[0].node.meta}
        >
          <html lang="en" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <Header
          siteTitle={data.allDataYaml.edges[0].node.title}
          subTitle={data.allDataYaml.edges[0].node.subTitle}
          links={data.allDataYaml.edges[0].node.links}
        />
        <ContentWrapper>{children}</ContentWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
