import { useState, useEffect } from 'react'

export default function FrutaForm({ frutaData, onSubmit, isEditing }) {
  const [fruta, setFruta] = useState({
    nombre: '',
    precio: '',
    cantidad: '',
    imagen: ''
  })

  // Actualizar el estado cuando cambia frutaData
  useEffect(() => {
    if (frutaData) {
      setFruta(frutaData)
    }
  }, [frutaData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFruta({ ...fruta, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(fruta)
  }

  return (
    <form onSubmit={handleSubmit} className="fruta-form">
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={fruta.nombre}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={fruta.precio}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
      </label>
      
      <label>
        Cantidad:
        <input
          type="number"
          name="cantidad"
          value={fruta.cantidad}
          onChange={handleChange}
          required
          min="0"
        />
      </label>
      
      <label>
        URL de la imagen:
        <input
          type="url"
          name="imagen"
          value={fruta.imagen}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
        />
      </label>
      
      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {isEditing ? 'Actualizar' : 'Agregar'}
        </button>
        
        {isEditing && (
          <button 
            type="button" 
            className="btn-cancel"
            onClick={() => window.history.back()}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}