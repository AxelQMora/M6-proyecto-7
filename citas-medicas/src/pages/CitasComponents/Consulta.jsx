import { useState } from "react";

function Consulta({ listaCitas }) {
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  function getInfo(cita) {
    setCitaSeleccionada(cita);
  }

  return (
    <div className="page-section">
      <h2>Consultar Citas</h2>
      <ul className="citas-list">
        {listaCitas.length > 0 ? (
          listaCitas.map((cita, index) => (
            <li key={index}>
              <span className="cita-paciente">{cita.Paciente}</span>
              <span className="cita-fecha">(Fecha: {cita.Fecha})</span>
              <button onClick={() => getInfo(cita)} className="btn btn-secondary">Info</button>
            </li>
          ))
        ) : (
          <p>No hay citas registradas.</p>
        )}
      </ul>

      {citaSeleccionada && (
        <div className="info-cita">
          <h3>Información de la cita</h3>
          Paciente: {citaSeleccionada.Paciente} <br />
          Doctor: {citaSeleccionada.Doctor} <br />
          Fecha: {citaSeleccionada.Fecha} <br />
          Especialidad: {citaSeleccionada.Especialidad} <br />
          Sede: {citaSeleccionada.Sede}
        </div>
      )}
    </div>
  );
}

export default Consulta;
