import './App.css'
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Service from './Components/Service/Service'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Service />
    </div>
  )
}

export default App
