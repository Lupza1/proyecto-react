import React from 'react';
import './styles/login.css'

class Login extends React.Component {
    render(){
        return(
            
            <div className="login body-login">
                <div>
                    <div>
                        <form className="form">
                            <ul>
                                <label htmlFor="name"><h2>Nombre: </h2></label>
                                <p></p>
                                <input type="Text" id="name" name="user_name" required></input>
                                <p></p>
                                
                                <label htmlFor="email"><h2>Email: </h2></label>
                                <p></p>
                                <input type="email" required placeholder="ejemplo@dominio.com"></input>
                                <p></p>
                                
                                <a href="/main"><button type="submit" className="btn btn-success">Confirmar</button></a>
                            </ul>
                        </form>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Login