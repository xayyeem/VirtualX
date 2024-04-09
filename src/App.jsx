import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Featured from './component/Featured'
import Workflow from './component/Workflow'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Featured />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
