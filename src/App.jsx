import './App.css'
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Service from './Components/Service/Service'
import Cursor from './Components/Cursor/Cursor'
import { useState, useEffect } from 'react'

function App() {

  const [cursorStyle, setCursorStyle] = useState({top: 0, left: 0})
  const [expand, setExpand] = useState(false)

  const handleMouseMove = (e) => {
    setCursorStyle({top: e.pageY - 10, left: e.pageX - 10})
  }

  const handleClick = (e) => {
    setExpand(current => !current)
    setTimeout(() => {
      setExpand(current => !current)
    }, 500)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className='app'>
      <Navbar />
      <Cursor cursorStyle={cursorStyle} expand={expand}/>
      <Home />
      <About />
      <Service />
    </div>
  )
}

export default App
