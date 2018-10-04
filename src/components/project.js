import React from 'react'
import styled from 'styled-components'

const ProjectImage = styled.img`
  width: 100%;
  margin: 2rem;
  margin: 0;
`

const ProjectContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;
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
