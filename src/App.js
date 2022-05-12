// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const headerTag = "Enigma Camp React"
  const myStyle = {color : 'black', fontSize : '40px'}

  const [fname, setFname] = useState("")

  const handleChange = e => {
    setFname(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {embeded expretion} */}
        <h1 style={myStyle}>{headerTag}</h1>
        <form>
        <label style={{fontWeight: 'bold'}}>
          First Name:{" "}
          <input type="text" value={fname} onChange={handleChange} />
        </label>
      </form>
      <h5>First name: {fname}</h5>
      </header>
    </div>
  );
}

export default App;
