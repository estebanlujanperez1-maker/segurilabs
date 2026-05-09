import "../style/footer.css"

import React from 'react'

const footer = () => {
  return (
    <div><>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="./img/Logo1.png" alt="Logo" />
            <h3>SEGURILABS</h3>
            <p>Seguridad y Salud en el Trabajo</p>
          </div>

          <div className="footer-contact-main">
            <i className="fa-solid fa-envelope"></i>
            <span>contacto@empresa.com</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Horarios</h4>
            <p>Lunes a Viernes</p>
            <p>8:00 AM - 6:00 PM</p>
          </div>

          <div className="footer-col">
            <h4>Ubicación</h4>
            <p>Calle 123 #45-67</p>
            <p>Ciudad, País</p>
          </div>

          <div className="footer-col">
            <h4>Contacto SST</h4>
            <p>+57 300 000 0000</p>
          </div>

          <div className="footer-col">
            <h4>Contacto Psicología</h4>
            <p>+57 301 000 0000</p>
          </div>
        </div>

        <div className="footer-copy">
          © 2026 Segurilabs. Todos los derechos reservados.
        </div>
      </footer>
      <a 
        href="https://wa.me/573126544698" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </> </div>
  )
}

export default footer