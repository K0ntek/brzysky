import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Offer from './components/Offer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Report from './components/Report'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Header/>
        {/* <div className=' grid lg:grid-cols-2 lg:gap-[1%] lg:w-[98%] mx-auto'> */}
          <About/>
          {/* <Offer/> */}
        {/* </div> */}
      <Gallery/>
        <div id="contact">
        {/* className=' grid md:grid-cols-2' */}
          <Contact/>
          <Report/>
        </div>
      <Footer/>
    </div>
  )
}

export default App
