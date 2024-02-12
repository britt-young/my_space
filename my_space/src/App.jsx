import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Header/>
    {/* Displays content defined by URL route  */}
    <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
};

export default App;
