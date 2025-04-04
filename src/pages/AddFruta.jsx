import { useNavigate } from 'react-router-dom'
import FrutaForm from '../components/FrutaForm'
import { addFruta } from '../data/frutas'
export default function AddFruta() {
  const navigate = useNavigate()

  const handleSubmit = async (fruta) => {
    await addFruta(fruta)
    navigate('/frutas')
  }

  return (
    <div className="add-fruta">
      <h2>Agregar Nueva Fruta</h2>
      <FrutaForm onSubmit={handleSubmit} />
    </div>
  )
}