import { useState, useRef } from 'react'
import './App.css'

import Htmlpage from './pages/Htmlpage'
import Homepage from './pages/Homepage'


import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/html" element={<Htmlpage />} />
      </Routes>

    </>
  );
}

export default App
