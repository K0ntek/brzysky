import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Lines from './components/Lines'
import Gallery from './components/Gallery'
import Offer from './components/Offer'

function App() {

  return (
   <div>
    {/* <Lines/> */}
     <div className=' max-w-[1400px] mx-auto px-6 mb-10'>
      <Navbar/>
      <Header/>
      <div className="about">
      <About/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      </div>
      <Offer/>
      <Gallery/>
      <Contact/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
