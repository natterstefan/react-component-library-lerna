/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

export const HelloWorld = ({ children, onClick }) => {
  return (
    <div onClick={onClick} role="button" tabIndex="0">
      {children}
    </div>
  )
}

export default HelloWorld
