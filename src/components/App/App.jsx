import { useState } from 'react'
import './App.css'
import MyButton from '../Button/Button.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyButton text={`Button has clicked ${count} times.`} onClick={() => setCount(count + 1)}/>
    </>
  )
}

export default App
