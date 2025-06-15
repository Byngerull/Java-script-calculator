import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className='Button'
          onClick={() =>setCount((count) => count + 1)}>

          {count}
        
        </button>
      </div>
      
    </>
  )
}

export default App
