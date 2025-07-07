
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Citas from './pages/Citas'
import CitaDetalle from './pages/CitaDetalle'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const isLoggedIn = localStorage.getItem('usuario');
  //Falta añadir qué pasa cuando si ha iniciado sesión el usuario
 
  return (
    <BrowserRouter>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <i className="fas fa-hospital-user"></i> Hospital Bienestar Total
          </Link>
          <nav className='nav-menu'>
            <Link to="/" className='btn btn-secondary'>Inicio</Link>
            <Link to="/citas" className='btn btn-secondary'>Citas</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/citas' element={isLoggedIn ? <Citas /> : <Login /> } />
        <Route path='/citas/:id' element={<CitaDetalle />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App
