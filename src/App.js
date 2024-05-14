import { useState } from 'react';
  
function App() {
  let [count, setCount] = useState(0);
  
  function handleCount(value) { 
    setCount(count + value);  
  }
 
  return ( 
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleCount(1)}>+</button>
      <button onClick={() => handleCount(-1)}>-</button>
      <button onClick={() => handleCount(5)}>+5</button>
      <button onClick={() => handleCount(-5)}>-5</button>
      <button onClick={() => handleCount(10)}>+10</button>
      <button onClick={() => handleCount(-10)}>-10</button>
    </div>
  );
}

export default App;
