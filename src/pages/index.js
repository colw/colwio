import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/project'


const IndexPage = ({ data: { aboutData, projectData } }) => {
  const {
    node: { html: aboutHtml },
  } = aboutData.edges[0]
  const projects = projectData.edges.map(x => x.node)

  return <Layout>
      <section dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      <h2>Recent Projects</h2>
      {projects.map((x, i) => <div key={i}>
          <Project {...x} />
        </div>)}
      <h2>Open Source</h2>
      <ul>
        <li>
          <a href="https://github.com/colw/cowpat" aria-label="Twitter">
            React based News Feed
          </a>
        </li>
        <li>
          <a href="https://github.com/colw/ruminator" aria-label="ruminator">
            Node.js RSS Aggregator
          </a>
        </li>
        <li>
        <a href="https://github.com/colw/react-cw-header" aria-label="react-cw-header">
            react-cw-header
          </a>
        </li>
        <li>
        <a href="https://github.com/colw/spotthestation-rss-reader" aria-label="NASA SpotTheStation RSS Reader">
            NASA SpotTheStation RSS Reader
          </a>
        </li>
        <li>
        <a href="https://github.com/colw/spotthestation-ics-creator" aria-label="NASA SpotTheStation ICS Creator">
            NASA SpotTheStation ICS Creator
          </a>
        </li>
      </ul>
      <h2>Skills</h2>
      <p>I use the following technologies:</p>
      <ul>
        <li>Javascript</li>
        <li>React, React-Native</li>
        <li>Angular</li>
        <li>HTML5</li>
        <li>SASS/CSS</li>
        <li>PHP</li>
        <li>Bolt CMS</li>
        <li>WordPress</li>
        <li>Redis</li>
        <li>MongoDB</li>
      </ul>
      <footer>© 2018 Col</footer>
    </Layout>
}

export default IndexPage

export const query = graphql`
  query {
    aboutData: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "About" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
    projectData: allProjectsYaml {
      edges {
        node {
          title
          link
          image
          text
        }
      }
    }
  }
`
