import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Accessories } from './pages/Accessories'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
