import { Link } from "react-router-dom"

function Hero() {
    return (
            <section className="hero">
                <div className="hero-content">
                    <h1>Comprometidos con tu Salud y Bienestar</h1>
                    <p>Atención médica de vanguardia con un equipo de especialistas dedicados a cuidarte.</p>
                    <Link to='/login' className="btn btn-primary">Inicia Sesión</Link>
                </div>
            </section>
    )
}

export default Hero