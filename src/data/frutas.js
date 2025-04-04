import localforage from 'localforage'

// Configurar localforage
localforage.config({
  name: 'fruteria-app',
  storeName: 'frutas'
})

// Generar ID único
function generateId() {
  return Math.random().toString(36).substring(2, 15)
}

// CRUD operations
export async function getFrutas() {
  let frutas = await localforage.getItem('frutas')
  if (!frutas) frutas = []
  return frutas
}

export async function getFruta(id) {
  const frutas = await getFrutas()
  return frutas.find(fruta => fruta.id === id)
}

export async function addFruta(fruta) {
  const frutas = await getFrutas()
  const newFruta = { ...fruta, id: generateId() }
  frutas.push(newFruta)
  await localforage.setItem('frutas', frutas)
  return newFruta
}

export async function updateFruta(id, updatedFruta) {
  const frutas = await getFrutas()
  const index = frutas.findIndex(fruta => fruta.id === id)
  if (index !== -1) {
    frutas[index] = { ...updatedFruta, id }
    await localforage.setItem('frutas', frutas)
  }
}

export async function deleteFruta(id) {
  const frutas = await getFrutas()
  const newFrutas = frutas.filter(fruta => fruta.id !== id)
  await localforage.setItem('frutas', newFrutas)
}