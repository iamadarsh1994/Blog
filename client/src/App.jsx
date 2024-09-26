import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-slate-800 text-slate-400 flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to Homepage</h1>
      <p class="text-gray-400">
        You can checkout this.
        <Home />
      </p>
    </div>
  </div>
    </>
  )
}

export default App
