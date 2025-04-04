import { Link } from 'react-router-dom'
export default function FrutaItem({ fruta, onDelete }) {
  return (
    <div className="fruta-card">
      <img src={fruta.imagen || 'https://via.placeholder.com/150'} alt={fruta.nombre} />
      <h3>{fruta.nombre}</h3>
      <p>Precio: ${fruta.precio}</p>
      <p>Cantidad: {fruta.cantidad} unidades</p>
      <div className="fruta-actions">
        <Link to={`/edit-fruta/${fruta.id}`} className="btn-edit">Editar</Link>
        <button onClick={() => onDelete(fruta.id)} className="btn-delete">Eliminar</button>
      </div>
    </div>
  )
}