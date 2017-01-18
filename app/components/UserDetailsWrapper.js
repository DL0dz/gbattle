import React from 'react'

export default props => {
  return (
    <div>
      <h2>{props.header}</h2>
      {props.children}
    </div>
  )
}
