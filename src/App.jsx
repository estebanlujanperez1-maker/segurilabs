import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from './view/Home'
import Nosotros from './view/Nosotros';
import Servicioshome from './view/Servicioshome';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/nosotros' element={<Nosotros />} />

      {/* Ruta nueva de servicios */}
      <Route path='/servicios' element={<Servicioshome />} />
     
    </Routes>
  )
}

export default App