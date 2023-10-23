import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'

function App() {

  return (
    <>
      <div className='w-full h-[100vh] text-center'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/calculator' element={<Calculator></Calculator>} />
        </Routes>
      </div>
    </>
  )
}

export default App
