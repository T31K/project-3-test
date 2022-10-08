import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  
  return (
    <div className="App">
      <h1>Simon's here </h1>
    </div>
  );
}

export default App;
