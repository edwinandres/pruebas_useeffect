import logo from './logo.svg';
import './App.css';
import Lifecycle from './Lifecycle';
import FetchCard from './FetchCard';
import ResizeApp from './ResizeApp';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      {show && <ResizeApp/>}
      <hr/>
      <Lifecycle/>
      <hr/>
      <FetchCard/>
    </div>
  );
}

export default App;
