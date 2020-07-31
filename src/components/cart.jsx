import React from "react"
import {Link} from "react-router-dom"
import './styles/cart.css'

const Cart = () =>{

    const [productos, setProductos] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setProductos(users)
    }

    return(
        <div className="cart body-cart container">
            <h1>Carrito</h1>
                <ul>
                    {
                        productos.map(item => (
                            <li key={item.id}>
                            <Link to={`/cart/${item.id}`}>
                            {item.name} - {item.email}
                            </Link>
                            </li>
                        ))
                    }
                </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Cart