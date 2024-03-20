import React, { useState } from 'react';
import './App.css';

function App() {
  const [n, setN] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSort = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setNumbers([...numbers].sort((a, b) => Number(a) - Number(b)));
    setLoading(false);
  };

  const handleChange = (e, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = e.target.value;
    setNumbers(newNumbers);
  };

  return (
    <div className="App">
      <input type="number" value={n} onChange={e => setN(e.target.value)} />
      <button onClick={() => setNumbers(new Array(Number(n)).fill(0))}>Generate</button>
      <button onClick={handleSort}>Sort</button>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className="number-container">
          {numbers.map((number, index) => (
            <input key={index} type="text" value={number} onChange={e => handleChange(e, index)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
