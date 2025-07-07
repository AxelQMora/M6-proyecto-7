import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  const listaCitas = JSON.parse(localStorage.getItem('listaCitas')) || [];

  const cita = listaCitas[id];

  if (!cita) {
    return (
      <div className="page-section cita-detalle">
        <h2>Detalles de la Cita</h2>
        <p>No se encontró la cita especificada.</p>
      </div>
    );
  }

  return (
    <div className="page-section cita-detalle">
      <h2>Detalles de la Cita</h2>
      <p>
        <strong>Paciente:</strong> {cita.paciente || 'Sin nombre'}
      </p>
      <p>
        <strong>Doctor:</strong> {cita.doctor || 'Sin doctor'}
      </p>
      <p>
        <strong>Fecha:</strong>{' '}
        {cita.fecha ? new Date(cita.fecha).toLocaleString() : 'Sin fecha'}
      </p>
      <p>
        <strong>Especialidad:</strong> {cita.especialidad || 'Sin especialidad'}
      </p>
      <p>
        <strong>Sede:</strong> {cita.sede || 'Sin sede'}
      </p>
    </div>
  );
}

export default CitaDetalle;