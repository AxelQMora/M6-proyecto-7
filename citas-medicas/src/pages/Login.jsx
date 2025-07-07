import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de autenticación básica
    if (usuario === 'admin' && password === '1234') {
      localStorage.setItem('usuario', usuario); // Guarda sesión
      navigate('/citas'); // Redirige
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    // Usamos la clase 'hero' para centrar el contenido en la página
    <div className="hero login-page"> 
      {/* Usamos 'card' para el panel del formulario y una clase específica 'login-form' */}
      <form onSubmit={handleSubmit} className="card login-form">
        <h2>Iniciar sesión</h2>
        
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            placeholder="Escribe 'admin'"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Escribe '1234'"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Reutilizamos las clases de botón de la landing page */}
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}

export default Login;