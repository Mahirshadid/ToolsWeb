import './App.css'

import Htmlpage from './pages/Htmlpage'
import Homepage from './pages/Homepage'
import Csspage from './pages/Csspage'
import Githubpage from './pages/Githubpage'
import Tailwindpsge from './pages/Tailwindpsge'
import JSpage from './pages/JSpage'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/html" element={<Htmlpage />} />
        <Route path='/css' element={<Csspage />} />
        <Route path='/github' element={<Githubpage />} />
        <Route path='/tailwind' element={<Tailwindpsge />} />
        <Route path='/javascript' element={<JSpage />} />
      </Routes>

    </>
  );
}

export default App
