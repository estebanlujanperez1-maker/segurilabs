export default function Equipo() {
  const team = [
    {
      name: "Nombre Apellido",
      role: "Coordinadora SG-SST",
      bio: "Especialista en seguridad y salud en el trabajo con más de 8 años acompañando empresas en su implementación normativa.",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Nombre Apellido",
      role: "Psicólogo Organizacional",
      bio: "Experto en bienestar laboral, clima organizacional y manejo del estrés. Acompaña procesos de intervención psicosocial en empresas de todos los sectores.",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Nombre Apellido",
      role: "Asesora de Riesgos Laborales",
      bio: "Con formación en medicina del trabajo y ergonomía, lidera los diagnósticos de condiciones de salud y los programas de vigilancia epidemiológica.",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ];

  const AvatarPlaceholder = () => (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "65%",
        height: "65%",
        color: "#a0b8c8",
      }}
    >
      <circle
        cx="40"
        cy="30"
        r="16"
        fill="currentColor"
        opacity="0.4"
      />

      <ellipse
        cx="40"
        cy="70"
        rx="26"
        ry="17"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );

  const IconFacebook = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      width="20"
      height="20"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const IconLinkedIn = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      width="20"
      height="20"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const IconInstagram = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      width="20"
      height="20"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 24px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2.5px",
          color: "#3aaa7a",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Nuestro equipo
      </p>

      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: 800,
          color: "#1a3a5c",
          marginBottom: "48px",
        }}
      >
        Los profesionales detrás de tu seguridad
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
        }}
      >
        {team.map((member, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              transition: "all 0.35s ease",
              borderRadius: "18px",
              padding: "18px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";

              e.currentTarget.style.boxShadow =
                "0 18px 40px rgba(167, 139, 250, 0.22)";

              e.currentTarget.style.background =
                "rgba(245, 243, 255, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow = "none";

              e.currentTarget.style.background =
                "transparent";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform =
                "translateY(-4px) scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1)";
            }}
          >
            {/* Avatar */}
            <div
              style={{
                alignSelf: "center",
                marginBottom: "24px",
                width: "180px",
                height: "180px",
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  padding: "5px",
                  background:
                    "linear-gradient(135deg, #1a5c45, #3aaa7a, #4cd694)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#e8f0f5",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AvatarPlaceholder />
                </div>
              </div>
            </div>

            {/* Info */}
            <div
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#1a1a1a",
                marginBottom: "4px",
              }}
            >
              {member.name}
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#3aaa7a",
                marginBottom: "12px",
              }}
            >
              {member.role}
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#5a6a7a",
                lineHeight: "1.65",
                marginBottom: "20px",
                flex: 1,
              }}
            >
              {member.bio}
            </p>

            {/* Barra social */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                background:
                  "linear-gradient(135deg, #1a5c45 0%, #3aaa7a 70%, #4cd694 100%)",
                borderRadius: "6px",
                padding: "12px 20px",
              }}
            >
              <a
                href={member.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  opacity: 0.9,
                }}
              >
                <IconFacebook />
              </a>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  opacity: 0.9,
                }}
              >
                <IconLinkedIn />
              </a>

              <a
                href={member.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  opacity: 0.9,
                }}
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}