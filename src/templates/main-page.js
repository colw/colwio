import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Project from '../components/Project'

const MainPage = ({ data }) => {
  const { html, frontmatter: { footer, projects, skills } } = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <section dangerouslySetInnerHTML={{ __html: html }} />
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

export default MainPage

export const query = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        meta {
          name
          content
        }
        skills
        links {
          icon
          link
          title
        }
        projects {
          title
          link
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          year
        }
        footer
      }
    }
  }
`
