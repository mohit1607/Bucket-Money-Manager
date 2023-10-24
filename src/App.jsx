import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import History from './pages/History'
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <div className='w-full h-[100vh] text-center'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home></Home>} />
            <Route path='/calculator' element={<Calculator></Calculator>} />
            <Route path='/history' element={<History></History>} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App
