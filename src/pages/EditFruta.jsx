import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FrutaForm from '../components/FrutaForm'
import { getFruta, updateFruta } from '../data/frutas'

export default function EditFruta() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [fruta, setFruta] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFruta = async () => {
      const frutaData = await getFruta(id)
      if (frutaData) {
        setFruta(frutaData)
      }
      setLoading(false)
    }
    loadFruta()
  }, [id])

  const handleSubmit = async (updatedFruta) => {
    await updateFruta(id, updatedFruta)
    navigate('/frutas')
  }

  if (loading) return <div>Cargando...</div>
  if (!fruta) return <div>Fruta no encontrada</div>

  return (
    <div className="edit-fruta">
      <h2>Editar Fruta</h2>
      <FrutaForm 
        frutaData={fruta} 
        onSubmit={handleSubmit} 
        isEditing={true}
      />
    </div>
  )
}