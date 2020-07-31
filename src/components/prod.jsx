import React from 'react'
import { useParams } from 'react-router-dom'

const User = () =>{

    //console.log(useParams())
    const {id} = useParams()

    const [pueblo, setPueblo] = React.useState([])
    console.log(id)
    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const users = await data.json()
            setPueblo(users)
        }
        obtenerDatos()
    }, [id])



    return(
        <div className="container">
            <div className="body-cart">
                <h3>{pueblo.name}</h3>
                <p>{pueblo.email}</p>
            </div>
        </div>
        
    )
}

export default User