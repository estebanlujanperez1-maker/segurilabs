import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from './view/Home'
import Nosotros from './view/Nosotros';
import Blog from './view/Blog';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/nosotros' element={<Nosotros />} />

      <Route path='/blog' element={<Blog />} />
     
    </Routes>
  )
}

export default App