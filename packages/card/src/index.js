import React from 'react'
import Button from '@natterstefan/ns-button-js'

const Card = ({ onClick, children }) => (
  <div
    style={{
      border: '1px solid black',
      padding: '5px 20px 20px',
      textAlign: 'center',
    }}
  >
    <h1>Card</h1>
    <Button onClick={onClick}>{children}</Button>
  </div>
)

export default Card
