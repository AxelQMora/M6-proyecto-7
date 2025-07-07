import { useState } from 'react';

function Registro({ listaCitas, setListaCitas }) {
  const [paciente, setPaciente] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [sede, setSede] = useState('');

  function registrarCita(e) {
    e.preventDefault();

    const nuevaCita = {
      paciente,
      doctor,
      fecha,
      especialidad,
      sede,
    };

    setListaCitas([...listaCitas, nuevaCita]);
    // Clear form inputs
    setPaciente('');
    setDoctor('');
    setFecha('');
    setEspecialidad('');
    setSede('');
  }

  return (
    <form onSubmit={registrarCita} className="page-section">
      <h2>Registrar Cita</h2>
      <div className="form-group">
        <label htmlFor="paciente">Paciente</label>
        <input
          type="text"
          id="paciente"
          placeholder="Nombre del paciente"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="doctor">Doctor</label>
        <input
          type="text"
          id="doctor"
          placeholder="Nombre del doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fecha">Fecha y Hora</label>
        <input
          type="datetime-local"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="especialidad">Especialidad</label>
        <input
          type="text"
          id="especialidad"
          placeholder="Ej. Cardiología"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)} // Fixed: Changed setPaciente to setEspecialidad
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="sede">Sede</label>
        <input
          type="text"
          id="sede"
          placeholder="Ej. Clínica Central"
          value={sede}
          onChange={(e) => setSede(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
}

export default Registro;