import React from 'react'
import { get } from 'lodash'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 2px solid ${props => get(props, 'theme.colors.accent') || '#000'};
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    border-color: ${props => get(props, 'theme.colors.secondary') || '#000'};
    font-weight: 700;
  }

  :active,
  :focus,
  :visited {
    outline: none;
  }
`

export const Button = ({ onClick, children }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
