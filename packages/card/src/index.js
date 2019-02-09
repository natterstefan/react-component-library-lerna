import React from 'react'
import Button from '@natterstefan/ns-button-js'

const Card = ({ onClick, buttonText, title }) => (
  <div
    style={{
      border: '1px solid black',
      padding: '5px 20px 20px',
      textAlign: 'center',
    }}
  >
    <h1>{title}</h1>
    <Button onClick={onClick}>{buttonText}</Button>
  </div>
)

export default Card
