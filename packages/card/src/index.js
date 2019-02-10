import React from 'react'
import styled from 'styled-components'
import Button from '@natterstefan/ns-button-js'

export const StyledCard = styled.div`
  border: 1px solid black;
  padding: 0 10px 15px;
  text-align: center;
`

export const Card = ({ onClick, buttonText, title }) => (
  <StyledCard>
    <h1>{title}</h1>
    <Button onClick={onClick}>{buttonText}</Button>
  </StyledCard>
)

export default Card
