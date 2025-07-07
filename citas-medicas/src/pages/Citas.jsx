import { useState, useEffect } from "react";
import Consulta from "./CitasComponents/Consulta"
import Registro from "./CitasComponents/Registro"

function Citas() {
    const [listaCitas, setListaCitas] = useState([]);

    // Cargar citas desde localStorage al iniciar
    useEffect(() => {
        const citasGuardadas = JSON.parse(localStorage.getItem("listaCitas")) || [];
        setListaCitas(citasGuardadas);
    }, []);

    // Guardar automáticamente en localStorage si cambia listaCitas
    useEffect(() => {
        localStorage.setItem("listaCitas", JSON.stringify(listaCitas));
    }, [listaCitas]);


    return (
        <>
            <div className="citas-container">
                <Registro listaCitas={listaCitas} setListaCitas={setListaCitas} />
                <Consulta listaCitas={listaCitas} />
            </div>
        </>
    )


}

export default Citas