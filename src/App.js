import React, {useState} from 'react';
import './App.css';
import Grid from './components/grid'

const arrOfObj = [{value:1,color: '#6F98A8'},{value:2,color: '#2B8EAD'}, {value:3,color: '#2F454E'}, {value:4,color: '#2B8EAD'}, {value:5,color: '#2F454E'}, {value:6,color: '#BFBFBF'}, 
{value:7,color:'#BFBFBF'}, {value:8,color: '#6F98A8'}, {value:9,color: '#2F454E'}]

function App() {
  const [result, setResult] = useState(arrOfObj);
  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log("array",array);
    setResult(array);
  }
  return (
    <div className="App">
      <Grid arrOfObj={result} />
      <button onClick={()=>setResult(arrOfObj)} className="sorting">Sort</button>
      <button  onClick={()=>shuffleArray(arrOfObj)} className="suffling">Suffle</button>
    </div>
  );
}

export default App