import React from 'react'
import Principal from '../components/Principal'
import Equipo from '../components/Equipo'
import Preguntas from '../components/Preguntas'
import Metodos from '../components/Metodos'
import Servicios from '../components/Servicios'
import Planes from '../components/Planes'
import Presencia from '../components/Presencia'
import Cotizacion from '../components/Cotizacion'
import Footer from '../components/Footer' 
import Comentarios from '../components/Comentarios'


const Home = () => {
  return (
    <div>
     <Principal />
     <Metodos />
     <Servicios />
      <Planes />
      <Cotizacion />  
      <Comentarios />
        <Presencia />
   <Equipo />
   <Preguntas />
   
   <Footer />
    </div>
  )
}

export default Home