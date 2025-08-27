import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"

const pageStyles: React.CSSProperties = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "96px"
}

const logoStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: 48,
  background: "linear-gradient(90deg, #7c3aed, #7033daff, #592aacff, #402aacff, #7033daff, #7c3aed)",
  backgroundSize: "300% 100%", 
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradient-move 6s ease-in-out infinite" as any
}

const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: 32,
  background: "linear-gradient(90deg, #7c3aed, #06b6d4, #22c55e, #f59e0b, #ef4444, #7c3aed)",
  backgroundSize: "300% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradient-move 6s ease-in-out infinite" as any
};

const inputStyles: React.CSSProperties = {
  width: "50%",
  padding: "36px 40px",
  fontSize: "24px",
  borderRadius: "12px",
  border: "4px solid transparent",
  outline: "none",
  background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #7c3aed, #06b6d4, #22c55e) border-box",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
};

const containerTextHelp: React.CSSProperties = {
  display: "flex",
  justifyContent: "end",
  width: "50%"
};

const textHelpStyles: React.CSSProperties = {
  fontSize: "14px",           
  color: "#6b7280",         
  marginTop: "8px", 
  marginBottom: "24px",
  fontStyle: "italic",
  textAlign: "center",
  maxWidth: "360px",
  lineHeight: 1.5,
  letterSpacing: "0.5px",
  opacity: 0.85,             
};

const inputFocus = `
  input:focus {
    border-color: transparent;
    background: linear-gradient(#fff, #fff) padding-box,
                linear-gradient(90deg, #7c3aed, #06b6d4, #22c55e) border-box;
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
    transform: scale(1.02);
  }
`;


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
        <style>{inputFocus}</style>
      <h1 style={logoStyles}>MonoPost</h1>
      <h1 style={headingStyles}>No MonoPost, cada ideia vira uma história e cada história pode inspirar o mundo.</h1>
      <input style={inputStyles} placeholder="💡 Digite algo incrível..." />
      <div style={containerTextHelp}>
        <span style={textHelpStyles}>Pressione <b>ENTER</b> para salvar.</span>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
