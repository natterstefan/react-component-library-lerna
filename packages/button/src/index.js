import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 1px solid #000;
  padding: 10px;

  :hover {
    border: 2px solid blue;
    cursor: pointer;
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
