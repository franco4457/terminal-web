import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import GuiaAlmagro from './pages/GuiaAlmagro'
import Viajes from './pages/Viajes'
import Beneficios from './pages/Beneficios'
import Informacion from './pages/Informacion'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/beneficios-estudiantiles" element={<Beneficios />} />
        <Route path="/guia-almagro" element={<GuiaAlmagro />} />
        <Route path="/informacion" element={<Informacion />} />
      </Route>
    </Routes>
  )
}

export default App
