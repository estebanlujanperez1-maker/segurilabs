import React from 'react'

const Separar1 = () => {
  return (
    <div>
  <style>
    {`
      .sgsst-sep {
        position: relative;
        width: 100%;
        min-height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          #1a5c45 0%,
          #3aaa7a 60%,
          #4dffa6 100%
        );
      }

      .sgsst-sep__mesh {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(
            ellipse at 20% 50%,
            rgba(255,255,255,0.07) 0%,
            transparent 55%
          ),
          radial-gradient(
            ellipse at 80% 30%,
            rgba(26,92,69,0.45) 0%,
            transparent 50%
          );
        z-index: 0;
      }

      .sgsst-sep__content {
        position: relative;
        z-index: 1;
        text-align: center;
        padding: 60px 40px;
        max-width: 820px;
        animation: fadeUp 0.85s cubic-bezier(.22,1,.36,1) both;
      }

      .sgsst-sep__title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(3rem, 8vw, 5.5rem);
        color: #ffffff;
        letter-spacing: 0.03em;
        line-height: 1;
        margin: 0 0 16px;
        text-shadow: 0 4px 32px rgba(0,0,0,0.2);
      }

      .sgsst-sep__sub {
        font-family: 'Barlow', sans-serif;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        color: rgba(255,255,255,0.82);
        font-weight: 400;
        line-height: 1.65;
        margin: 0;
        animation: fadeUp 0.85s 0.15s cubic-bezier(.22,1,.36,1) both;
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

  <section className="sgsst-sep">

    <div className="sgsst-sep__mesh"></div>

    <div className="sgsst-sep__content">

      <h2 className="sgsst-sep__title">
        La prevención salva vidas.
      </h2>

      <p className="sgsst-sep__sub">
        Pero también protege empresas, reputaciones y sueños.
      </p>

    </div>

  </section>
    </div>
  )
}

export default Separar1