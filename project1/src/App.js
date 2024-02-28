import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleOnClick = (value)=>{
    setCount(count + value)
}
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleOnClick={handleOnClick} />
      </section>
    </div>
  );
}

export default App;
