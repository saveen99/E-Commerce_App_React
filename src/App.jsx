import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold text-blue-500 text-center mt-[200px]'>
        MERN-Stack Website
      </h1>
      <div class="text-center">
        <button class="px-4 py-2 bg-blue-500 text-white rounded mt-8">Click Me</button>
      </div>
    </>
  )
}

export default App
