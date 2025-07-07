

function Services() {
    return (
        <>
            <section id="servicios" className="services">
                <div className="container">
                    <h2>Nuestras Especialidades</h2>
                    <div className="service-cards">
                        <div className="card">
                            <i className="fas fa-heartbeat"></i>
                            <h3>Cardiología</h3>
                            <p>Prevención, diagnóstico y tratamiento de enfermedades del corazón.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-baby"></i>
                            <h3>Pediatría</h3>
                            <p>Atención médica integral para bebés, niños y adolescentes.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-brain"></i>
                            <h3>Neurología</h3>
                            <p>Estudio y tratamiento de los trastornos del sistema nervioso.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-bone"></i>
                            <h3>Traumatología</h3>
                            <p>Tratamiento de lesiones del aparato locomotor como huesos y músculos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services