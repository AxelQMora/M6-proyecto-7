import { useState } from "react"

function Registro() {
const [listaCitas, setListaCitas] = useState([]);

    return (
        <>
            <form
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '24px',
                    padding: '100px',
                    marginTop: '200px',
                }}
            >
                <input type="text" placeholder="Paciente" />
                <input type="text" placeholder="Doctor" />
                <input type="datetime-local" />
                <input type="text"  placeholder="Especialidad"/>
                <input type="text" placeholder="Cede" />
                <button type="submit" >Registrar</button>

            </form>

        </>
    )

}

export default Registro