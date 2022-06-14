import React from 'react'

export const Element = (props) => {
  return (
    <div className="master-element" style={{
        color: props.color,
        border: props.color
    }}>
        Element
    </div>
  )
}
