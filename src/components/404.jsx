import React from "react"
import { render } from "@testing-library/react"

const Nf404 = () =>{
    render()
    return(
        <div className="404">
            <h1>Esta pagina no existe</h1>
            <p>Prueba revisar la barra de dirección</p>
        </div>
    )
}

export default Nf404