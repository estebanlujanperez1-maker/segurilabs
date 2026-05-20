import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from './view/Home'
import Nosotros from './view/Nosotros';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/nosotros' element={<Nosotros />} />
    </Routes>
  )
}

export default App