import { useState } from 'react'
import Body from './component/Body'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      안녕
      <Body />
    </div>
  )
}

export default App
