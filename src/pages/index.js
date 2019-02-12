import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/project'

const IndexPage = ({ data: { aboutData, projectData } }) => {
  const {
    node: { html: aboutHtml },
  } = aboutData.edges[0]
  const { footer, projects, skills } = projectData.edges[0].node
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
      <footer>{footer}</footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    aboutData: markdownRemark {
      frontmatter {
        title
      }
      html
    }
    projectData: allDataYaml {
      edges {
        node {
          footer
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
