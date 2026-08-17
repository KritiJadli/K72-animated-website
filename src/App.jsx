
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Stairs from './components/common/stairs'
import Navbar from './components/navigtion/Navbar'
import FullScreenNav from './components/navigtion/FullScreenNav'

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
 
  return (
    <div className='text-black'>
    <Stairs/>
    <Navbar onOpen={() => setNavOpen(true)} />
    <FullScreenNav navOpen={navOpen} onClose={() => setNavOpen(false)} />
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </div>
  )
}

export default App
