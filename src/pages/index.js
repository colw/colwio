import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/project'

const IndexPage = ({ data: { aboutData, projectData, skillsData } }) => {
  const {
    node: { html: aboutHtml },
  } = aboutData.edges[0]
  const projects = projectData.edges[0].node.projects
  const skills = projectData.edges[0].node.skills
  return (
    <Layout>
      <section dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      <h2>Recent Projects</h2>
      {projects.map((x, i) => (
        <div key={i}>
          <Project {...x} />
        </div>
      ))}
      <h2>Skills</h2>
      <p>I use the following technologies:</p>
      <ul>
        {skills.map(x => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <footer>© 2018 Col</footer>
    </Layout>
  )
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
    projectData: allDataYaml {
      edges {
        node {
          projects {
            image
            link
            text
            title
            year
          }
          skills
        }
      }
    }
  }
`
