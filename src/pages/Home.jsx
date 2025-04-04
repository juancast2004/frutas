import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFrutas } from '../data/frutas'
export default function Home() {
  const [frutas, setFrutas] = useState([])

  useEffect(() => {
    const loadFrutas = async () => {
      const frutasData = await getFrutas()
      setFrutas(frutasData)
    }
    loadFrutas()
  }, [])

  return (
    <div className="home">
      <h2>Bienvenido a Frutería Juan</h2>
      <p>Gestiona el inventario de tu frutería con esta aplicación.</p>
      
      <div className="frutas-list-home">
        <h3>Inventario Actual</h3>
        {frutas.length === 0 ? (
          <p className="no-frutas">No hay frutas registradas. <Link to="/add-fruta">Agrega la primera</Link></p>
        ) : (
          <ul className="frutas-list-basic">
            {frutas.map(fruta => (
              <li key={fruta.id} className="fruta-item-home">
                <span className="fruta-nombre">{fruta.nombre}</span>
                <span className="fruta-info">${fruta.precio} - {fruta.cantidad} unidades</span>
                <Link to={`/edit-fruta/${fruta.id}`} className="edit-link">Editar</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="home-actions">
        <Link to="/frutas" className="btn-ver-todas">Ver todas las frutas</Link>
        <Link to="/add-fruta" className="btn-agregar">Agregar nueva fruta</Link>
      </div>
    </div>
  )
}