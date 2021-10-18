import "./App.css";
import { useState } from "react";
import Counter from "./component/counter";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>COUNTER</h2>
      <div className="flex">
        <button className="dec" onClick={() => setCounter(counter - 1)}>
          {" "}
          dec
        </button>

        <Counter counter={counter} />

        <button className="inc" onClick={() => setCounter(counter + 1)}>
          {" "}
          inc
        </button>
      </div>
    </div>
  );
}

export default App;
