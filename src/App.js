import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/grid'

function App() {

  const arrOfObj = [{ value: 1, color: '#6F98A8' },
  { value: 2, color: '#2B8EAD' }, { value: 3, color: '#2F454E' },
  { value: 4, color: '#2B8EAD' }, { value: 5, color: '#2F454E' },
  { value: 6, color: '#BFBFBF' }, { value: 7, color: '#BFBFBF' },
  { value: 8, color: '#6F98A8' }, { value: 9, color: '#2F454E' }]

  const [result, setResult] = useState(arrOfObj);

  // useEffect(() => {
  //   console.log("insideeffect", result);
  // }, [result]);

  console.log("on first load",result);

  const sortedArray = (array)=> {
    let sorted = array.sort((a,b) =>(a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
    console.log("sorted", sorted);
    setResult(sorted);
    console.log("result", result);
  }

  const shuffledArray = (array)=> {
    let shuffled = array.sort(() => Math.random() - 0.5);
    console.log("shuffled", shuffled);
    setResult(shuffled);
    console.log("result", result);
  }

  return (
    <div className="App">
      <div className="gridButtonTop">
        <button onClick={() => shuffledArray(result)} className="suffling">SHUFFLE</button>
        <button onClick={() => sortedArray(result)} className="sorting">SORT</button>
      </div>
      <Grid arrOfObj={result} />
      <div className="gridButtonBottom">
        <button onClick={() => shuffledArray(result)} className="suffling">SHUFFLE</button>
        <button onClick={() => sortedArray(result)} className="sorting">SORT</button>
      </div>
    </div>
  );
}

export default App