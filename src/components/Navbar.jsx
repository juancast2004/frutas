import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img 
          src="/logo-juan.png" 
          alt="Logo Frutería Juan" 
          className="logo"
        />
        <h1>Frutería Juan</h1>
      </div>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/frutas">Lista Completa</Link>
        <Link to="/add-fruta">Agregar Fruta</Link>
      </div>
    </nav>
  )
}