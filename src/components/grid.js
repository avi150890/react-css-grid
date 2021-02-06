import React from 'react'

export default function Grid (props) {
  console.log("props",props);
  const cells = props.arrOfObj.map(obj => 
    <div key={obj.value} style={{ backgroundColor: obj.color}} 
    className="cell">{obj.value}</div>)

  return (
    <div key={props.arrOfObj[0].value} className="container">
      {cells}
    </div>
  )
}