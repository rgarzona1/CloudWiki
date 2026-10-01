import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Conceptos from './pages/Conceptos'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Proveedores from './pages/Proveedores'
import Servicios from './pages/Servicios' 

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conceptos" element={<Conceptos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
