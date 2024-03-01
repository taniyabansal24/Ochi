import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full min-h-sreen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
