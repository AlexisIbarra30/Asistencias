import React from 'react';
import history from 'history';

export default class LoginPage extends React.Component {

    state = {
        error: undefined,
        user: "",
        password: "",
        userRole: undefined
    }

    handleTypeUser = (userRole) => {
        this.setState(() => ({
            userRole
        }))
    }

    onUserChange = (e) => {
        const user = e.target.value.trim();
        this.setState(() => ({ user }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value.trim();
        this.setState(() => ({ password }))
    }

    authUser = () => {

        // Envolvemos los datos en un JSON
        const json = new URLSearchParams({
            usuario: this.state.user,
            password: this.state.password,
            tipo_usuario: this.state.userRole
        });
        const url = `http://localhost/PAGINAS/backendIHM/usuarios.php?${json.toString()}`;
        console.log(url);
        // Lanzamos los datos al servidor
        fetch(url, {
            method: 'GET',
            mode: 'cors',
        })
            .then(res => res.json())
            .catch(error => {
                console.log('Error', error)
            })
            .then(response => {
                // Si existe error lo mostramos en pantalla
                console.log('hola paco');
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <div className='loginContainer'>
                    <img src='./images/logo.png' className='loginImage' />
                    <h1 className='loginTitle'> Iniciar sesión </h1>
                    {!!!this.state.error ? (
                        <div></div>
                    ) : (
                        <div className='loginError'>
                            <p>{this.state.error}</p>
                        </div>
                    )}

                    <div className='loginPanel'>
                        <div className='loginForm'>
                            <p className='loginText'> Usuario</p>
                            <input onChange={this.onUserChange} value={this.state.user} className='loginInput' type='text' />
                            <p className='loginText'> Contraseña </p>
                            <input onChange={this.onPasswordChange} value={this.state.password} className='loginInput' type='password' />
                            <p className='loginText'>Tipo de usuario: </p>
                            <div className="radios">
                                <div className="radio-item">
                                    <input onClick={() => { this.handleTypeUser(0) }} type="radio" value="0" name="tipo-usuario"></input>
                                    <label>Usuario</label>
                                </div>

                                <div className="radio-item">
                                    <input onClick={() => { this.handleTypeUser(0) }} type="radio" value="1" name="tipo-usuario"></input>
                                    <label>Administardor</label>
                                </div>
                            </div>
                            <button onClick={this.authUser} className='loginButton'> Acceder </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
