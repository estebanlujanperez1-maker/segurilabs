import Principal from "../components/Principal";
import Beneficios from "../components/Beneficios";
import Empresas from "../components/Empresas";
import Comentarios from "../components/Comentarios";
import Estadisticas from "../components/Estadisticas";
import Metodos from "../components/Metodos";
import Planes from "../components/Planes";
import Preguntas from "../components/Preguntas";
import Presencia from "../components/Presencia";
import Separador2 from "../components/Separador2";
import Separador3 from "../components/Separador3";
import Frase1 from "../components/Frase1";
import Servicios from "../components/Servicios";
import Equipo from "../components/Equipo";
import Cotizacion from "../components/Cotizacion";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
{/* No modificar nada rompen navegacion */}
    
      <section id="inicio">
        <Principal />
      </section>
         <section id="servicios">
        <Servicios />
      </section>

      <Beneficios />

      <Empresas />

      <Comentarios />

      <Estadisticas />

      <Metodos />

      <Frase1 />

      <Separador2 />

      <Separador3 />

      <Planes />

      {/* navegacion a equipo */}
      <section id="equipo">
        <Equipo />
      </section>

      <Presencia />

      <Preguntas />

      {/* navegacion a cotizar */}
      <section id="cotizar">
        <Cotizacion />
      </section>

      <Footer />

    </>
  );
}