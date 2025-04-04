import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FrutaItem from '../components/FrutaItem'
import { getFrutas, deleteFruta } from '../data/frutas'

export default function FrutasList() {
  const [frutas, setFrutas] = useState([])

  useEffect(() => {
    const loadFrutas = async () => {
      const frutasData = await getFrutas()
      setFrutas(frutasData)
    }
    loadFrutas()
  }, [])

  const handleDelete = async (id) => {
    await deleteFruta(id)
    setFrutas(frutas.filter(fruta => fruta.id !== id))
  }

  return (
    <div className="frutas-list">
      <h2>Lista Completa de Frutas</h2>
      <div className="list-header">
        <p>Total: {frutas.length} frutas</p>
        <Link to="/add-fruta" className="btn-add">Agregar Fruta</Link>
      </div>
      <div className="frutas-grid">
        {frutas.length === 0 ? (
          <div className="no-frutas">
            <p>No hay frutas registradas.</p>
            <Link to="/add-fruta">Agrega la primera fruta</Link>
          </div>
        ) : (
          frutas.map(fruta => (
            <FrutaItem key={fruta.id} fruta={fruta} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  )
}