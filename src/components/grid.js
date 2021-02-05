import React from 'react'

export default function Grid (props) {
  const cells = props.arrOfObj.map(obj => 
    <div key={obj.value} style={{ backgroundColor: obj.color}} 
    className="cell">{obj.value}</div>)

  return (
    <div className="container">
      {cells}
    </div>
  )
}