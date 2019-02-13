import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ProjectImage = styled(Image)`
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

const ProjectName = styled.a`
  font-size: 1.4rem;
`

const Year = styled.small`
  margin-top: 2rem;
  display: inline-block;
  font-weight: 200;
  font-size: 1rem;
  opacity: 0.7;
  padding-left: 0.5rem;
`

// Kludge so the images are not alignedin the center when scaling.
const alignTop = `
  img { object-position: top center !important; }
`

const Project = ({ title, link, image, text, year }) => {
  return (<ProjectContainer>
    <ProjectName href={link} aria-label={title}>
      {title}
    </ProjectName>{' '}
    {year && <Year>{year}</Year>}
    <a href={link} aria-label={title}>
      <ProjectImage css={alignTop} fluid={image.childImageSharp.fluid} alt={text} />
    </a>
    <p>{text}</p>
  </ProjectContainer>
  );

}

export default Project
