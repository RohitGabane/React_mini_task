// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [status, setStatus] = useState(true);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      <h1>Hello React Input Box....!</h1>
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>

      <hr></hr>
      {status ? <h2>hello Guys</h2> : null}
      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>Hide</button>

      <hr></hr>
      
      <form>
        <input type="text" placeholder="Enter your city" /><br/><br/><br/>
        <select>
          <option> Select your city </option>
          <option>Mumbai</option>
          <option>pune</option>
        </select>
        <br></br> <br></br> <br></br>
        <input type="checkbox"/><span>Accept term and Condition</span><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
