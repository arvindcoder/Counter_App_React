import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 10)
    setCounter(counter + 1);
  };

  const reduceValue = () => {
    if(counter > 0)
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>My First Counter App From  React</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue} >Increment Value</button>
     
      <button onClick={reduceValue} className="add">Decrement Value</button>
    </>
  );
}

export default App;
