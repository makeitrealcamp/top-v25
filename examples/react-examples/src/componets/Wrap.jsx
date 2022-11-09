import React from 'react'

const Wrap = (props) => {
  return(
    <div>
      <h3>{props.name}</h3>
      {props.children}
    </div>
  )
}

export default Wrap
