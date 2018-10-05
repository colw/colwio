import React from 'react'
import styled from 'styled-components'

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 350px;
  box-shadow: 0px 1px 3px 1px #ccc;
  margin: 1em 0;
  display: block;
`

const ProjectContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  a {
    text-decoration: none;
  }
`

const Project = ({ title, link, image, text }) => (
  <ProjectContainer>
    <a href={link}>{title}</a>
    <a href={link}>
      <ProjectImage src={image} alt="" />
    </a>
    <p>{text}</p>
  </ProjectContainer>
)

export default Project
