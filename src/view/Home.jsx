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
import Empresas from '../components/Empresas'
import Beneficios from '../components/Beneficios' 
import Estadisticas from '../components/Estadisticas' 
import Frase1 from '../components/Frase1' 
import Separador2 from '../components/Separador2' 
import Separador3 from '../components/Separador3'
import Separadorcumplimiento from '../components/Separadorcumplimiento' 
const Home = () => {
  return (
    <div>
      <Principal />
   <Servicios />
      <Equipo   />
      <Beneficios />
      <Empresas />  
      <Comentarios />
      <Estadisticas />  
      <Metodos />
      <Frase1 />  
      <Planes />
      <Separador2 />
      <Cotizacion />
      <Separador3 />
<Presencia />
<Separadorcumplimiento /> 
      <Preguntas />
      <Footer />
    
    </div>
  )
}

export default Home