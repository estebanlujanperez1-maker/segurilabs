const Presencia = () => {
  return (
    <>
      <section className="presencia">

        <div className="presencia-left">

          <span className="subtitulo">
            PRESENCIA ESTRATÉGICA
          </span>

          <h2>
            Estamos donde tu empresa nos necesite
          </h2>

          <p>
            Con sede principal en <strong>Santa Rosa de Osos</strong>,
            brindamos acompañamiento técnico y estratégico en
            Seguridad y Salud en el Trabajo, con atención profesional,
            cercana y orientada al cumplimiento normativo.
          </p>

          <div className="sede-card">

            <div className="icono">
              📍
            </div>

            <div>
              <h3>SANTA ROSA DE OSOS (SEDE PRINCIPAL)</h3>

              <span>
                Centro Comercial Plaza Real
              </span>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/place/Centro+Comercial+Plaza+Real/@6.6470448,-75.4597858,21z/data=!4m6!3m5!1s0x8e4444435c6209c5:0x427e76922fd0f1ac!8m2!3d6.6470161!4d-75.4598565!16s%2Fg%2F11crzprxnm"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-btn"
          >
            Ver ubicación en Google Maps
          </a>

        </div>

        <div className="presencia-right">

          <div className="mapa-card">

            <div className="mapa">

              <div className="punto santa">
                <span>Santa Rosa de Osos</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .presencia{
          min-height:100vh;

          padding:120px 10%;

          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:80px;

          background:#f5f7f9;
        }

        /* LEFT */

        .presencia-left{
          flex:1;
        }

        .subtitulo{
          display:block;

          color:#3aaa7a;

          letter-spacing:4px;

          font-size:14px;

          margin-bottom:25px;
        }

        .presencia-left h2{
          font-size:72px;

          line-height:1.05;

          color:#134a97;

          margin-bottom:35px;

          font-weight:800;

          max-width:650px;
        }

        .presencia-left p{
          font-size:22px;

          line-height:1.8;

          color:#5d708a;

          max-width:700px;

          margin-bottom:50px;
        }

        .presencia-left strong{
          color:#134a97;
        }

        /* CARD */

        .sede-card{
          display:flex;
          align-items:center;
          gap:20px;

          background:white;

          padding:28px;

          border-radius:24px;

          box-shadow:0 10px 30px rgba(0,0,0,0.05);

          max-width:700px;

          margin-bottom:40px;

          border:1px solid #edf1f5;
        }

        .icono{
          min-width:70px;
          height:70px;

          border-radius:18px;

          background:#e8f8f1;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:30px;
        }

        .sede-card h3{
          color:#134a97;

          font-size:28px;

          margin-bottom:10px;
        }

        .sede-card span{
          color:#7d8ea3;

          font-size:18px;
        }

        /* BOTON */

        .maps-btn{
          display:inline-block;

          text-decoration:none;

          background:#134a97;

          color:white;

          padding:18px 32px;

          border-radius:50px;

          font-weight:600;

          transition:.3s;
        }

        .maps-btn:hover{
          transform:translateY(-4px);

          background:#0f3b78;
        }

        /* RIGHT */

        .presencia-right{
          flex:1;

          display:flex;
          justify-content:center;
        }

        .mapa-card{
          width:100%;
          max-width:650px;

          height:800px;

          background:white;

          border-radius:40px;

          display:flex;
          align-items:center;
          justify-content:center;

          box-shadow:0 20px 50px rgba(0,0,0,0.06);

          position:relative;
        }

        /* MAPA */

        .mapa{
          position:relative;

          width:300px;
          height:500px;

          border:4px solid #d6dee8;

          clip-path:polygon(
            40% 0%,
            80% 0%,
            100% 30%,
            85% 65%,
            60% 100%,
            20% 85%,
            10% 50%
          );

          background:#f2f5f8;
        }

        .punto{
          position:absolute;

          width:20px;
          height:20px;

          background:#134a97;

          border-radius:50%;
        }

        .punto span{
          position:absolute;

          left:35px;

          top:-5px;

          width:max-content;

          color:#134a97;

          font-weight:700;

          font-size:18px;
        }

        .santa{
          top:45%;
          left:48%;
        }

        /* RESPONSIVE */

        @media(max-width:1100px){

          .presencia{
            flex-direction:column;
          }

          .presencia-left h2{
            font-size:52px;
          }

          .mapa-card{
            height:600px;
          }
        }

        @media(max-width:768px){

          .presencia{
            padding:100px 7%;
          }

          .presencia-left h2{
            font-size:42px;
          }

          .presencia-left p{
            font-size:18px;
          }

          .sede-card h3{
            font-size:22px;
          }

          .mapa{
            transform:scale(.8);
          }
        }

      `}</style>
    </>
  );
};

export default Presencia;