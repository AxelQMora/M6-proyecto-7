import { useState } from "react";

function Registro({ listaCitas, setListaCitas }) {
  const [paciente, setPaciente] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [sede, setSede] = useState('');

  function registrarCita(e) {
    e.preventDefault();

    const nuevaCita = {
      Paciente: paciente,
      Doctor: doctor,
      Fecha: fecha,
      Especialidad: especialidad,
      Sede: sede
    };

    setListaCitas([...listaCitas, nuevaCita]);

    setPaciente('');
    setDoctor('');
    setFecha('');
    setEspecialidad('');
    setSede('');
  }

  return (
    <form onSubmit={registrarCita} className="page-section">
      <h2>Registrar Cita</h2>
      <input type="text" placeholder="Paciente" value={paciente} onChange={e => setPaciente(e.target.value)} required />
      <input type="text" placeholder="Doctor" value={doctor} onChange={e => setDoctor(e.target.value)} required />
      <input type="datetime-local" value={fecha} onChange={e => setFecha(e.target.value)} required />
      <input type="text" placeholder="Especialidad" value={especialidad} onChange={e => setEspecialidad(e.target.value)} required />
      <input type="text" placeholder="Sede" value={sede} onChange={e => setSede(e.target.value)} required />
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  );
}

export default Registro;
