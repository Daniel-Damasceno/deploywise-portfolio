import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dr. José Carlos Paes Leme — Case DeployWise";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #000000, #111111)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#7c3aed",
                borderRadius: "8px",
              }}
            />
            <span style={{ fontSize: "32px", fontWeight: "bold", letterSpacing: "-1px" }}>
              DeployWise
            </span>
          </div>

          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              background: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "100px",
              color: "#a78bfa",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              width: "fit-content",
            }}
          >
            Case Study
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              maxWidth: "800px",
              marginTop: "20px",
            }}
          >
            Dr. José Carlos Paes Leme
          </h1>

          <p
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              maxWidth: "800px",
              marginTop: "20px",
              lineHeight: 1.4,
            }}
          >
            Presença digital construída do zero para um cirurgião vascular com 40+ anos de mercado em Manaus.
          </p>
        </div>

        <div style={{ display: "flex", gap: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "48px", fontWeight: "bold", color: "white" }}>40+</span>
            <span style={{ fontSize: "20px", color: "#9ca3af" }}>Anos de Experiência</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "48px", fontWeight: "bold", color: "white" }}>5.000+</span>
            <span style={{ fontSize: "20px", color: "#9ca3af" }}>Pacientes Atendidos</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
