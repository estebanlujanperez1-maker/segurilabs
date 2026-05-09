import React from 'react'
import Principal from '../components/Principal'
import Equipo from '../components/Equipo'
import Preguntas from '../components/Preguntas'
import Metodos from '../components/Metodos'
import Servicios from '../components/Servicios'
const Home = () => {
  return (
    <div>
     <Principal />
     <Metodos />
     <Servicios />
    <Preguntas />
     <Equipo />
   
    </div>
  )
}

export default Home