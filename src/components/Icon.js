import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = styled.div`
  display: inline-block;
  font-size: 2rem;
  color: rgb(30, 174, 219);
`

export const Icon = ({ title, link, icon }) => (
  <IconWrapper>
    <a href={link} aria-label={title}>
      <FontAwesomeIcon icon={icon.split(' ')} />
    </a>
  </IconWrapper>
)

Icon.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
}

export default Icon
