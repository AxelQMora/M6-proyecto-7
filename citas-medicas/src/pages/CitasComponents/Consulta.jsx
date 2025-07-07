import { Link } from 'react-router-dom';

function Consulta({ listaCitas }) {
  return (
    <div className="page-section">
      <h2>Consultar Citas</h2>
      <ul className="citas-list">
        {listaCitas?.length > 0 ? (
          listaCitas.map((cita, index) => (
            <li key={index}>
              <span className="cita-paciente">{cita.paciente || 'Sin nombre'}</span>
              <span className="cita-fecha">
                (Fecha: {cita.fecha ? new Date(cita.fecha).toLocaleString() : 'Sin fecha'})
              </span>
              <Link to={`/citas/${index}`} className="btn btn-secondary">
                Info
              </Link>
            </li>
          ))
        ) : (
          <p>No hay citas registradas.</p>
        )}
      </ul>
    </div>
  );
}

export default Consulta;