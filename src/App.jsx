import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FrutasList from './pages/FrutasList'
import AddFruta from './pages/AddFruta'
import EditFruta from './pages/EditFruta'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frutas" element={<FrutasList />} />
        <Route path="/add-fruta" element={<AddFruta />} />
        <Route path="/edit-fruta/:id" element={<EditFruta />} />
      </Routes>
    </div>
  )
}

export default App