import React from 'react'
import Principal from '../components/Principal'
import Equipo from '../components/Equipo'
import Preguntas from '../components/Preguntas'
import Metodos from '../components/Metodos'
import Servicios from '../components/Servicios'
import Planes from '../components/Planes'
import Presencia from '../components/Presencia'
const Home = () => {
  return (
    <div>
     <Principal />
     <Metodos />
     <Servicios />
      <Planes />
        <Presencia />
   <Equipo />
   <Preguntas />
    </div>
  )
}

export default Home