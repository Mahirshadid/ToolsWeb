import './App.css'

import Htmlpage from './pages/Htmlpage'
import Homepage from './pages/Homepage'
import Csspage from './pages/Csspage'


import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/html" element={<Htmlpage />} />
        <Route path='/css' element={<Csspage />} />
      </Routes>

    </>
  );
}

export default App
