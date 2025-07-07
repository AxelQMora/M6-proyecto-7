

function Footer() {

    return (
        <>
         <footer id="contacto" className="footer">
        <div className="container footer-content">
            <div className="footer-section">
                <h3>Hospital Bienestar Total</h3>
                <p>Av. Siempre Viva 123, Col. Salud,<br/>Ciudad Esperanza, México.</p>
                <p>Teléfono: (55) 1234-5678</p>
                <p>Urgencias 24/7</p>
            </div>
            <div className="footer-section">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Directorio Médico</a></li>
                    <li><a href="#">Resultados de Laboratorio</a></li>
                    <li><a href="#">Bolsa de Trabajo</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Síguenos en Redes</h3>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Hospital Bienestar Total. Todos los derechos reservados.</p>
        </div>
    </footer>
        </>
    )
}

export default Footer