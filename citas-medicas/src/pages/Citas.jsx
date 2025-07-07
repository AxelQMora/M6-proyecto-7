import { useState, useEffect } from 'react';
import Consulta from './CitasComponents/Consulta';
import Registro from './CitasComponents/Registro';

function Citas() {
  const [listaCitas, setListaCitas] = useState([]);

  // Load citas from localStorage on mount
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('listaCitas')) || [];
    setListaCitas(citasGuardadas);
  }, []);

  // Save to localStorage when listaCitas changes
  useEffect(() => {
    localStorage.setItem('listaCitas', JSON.stringify(listaCitas));
  }, [listaCitas]);

  return (
    <div className="citas-container">
      <Registro listaCitas={listaCitas} setListaCitas={setListaCitas} />
      <Consulta listaCitas={listaCitas} />
    </div>
  );
}

export default Citas;