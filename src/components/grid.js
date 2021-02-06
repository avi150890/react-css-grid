import React from 'react';

export default function Cubegrid({ grids }) {
    const cells = grids.map(obj =>
        <div key={obj.value} style={{ backgroundColor: obj.color }}
            className="cell">{obj.value}</div>)
    const bars = grids.map(obj =>
        <div key={obj.value} style={{ borderLeft: `0.6rem solid ${obj.color}` }}
            className="cell">{obj.value}</div>)

    return (
        <>
            <div className="container1">
                {cells}
            </div>
            <div className="container2">
                {bars}
            </div>
        </>

    )
}