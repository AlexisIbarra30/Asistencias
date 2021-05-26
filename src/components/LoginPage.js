import React from 'react';
import {history} from '../routers/AppRouter';


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
        });
        const url = `http://localhost:8000/PAGINAS/backendIHM/usuarios.php?${json.toString()}`;
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
                const user = response[0];
                //Usuario comun
                if(user.valido === true && user.tipo_usuario === "0") {
                    //Guardamos en el localStorage el usuario
                    localStorage.setItem("USER", JSON.stringify({"nombre": user.nombre, "apellidos": user.apellidos }))
                    history.push("/user");
                }else {
                    // Administrador
                    if(user.valido === true && user.tipo_usuario === "1") {
                        //Guardamos en el localStorage el usuario
                        localStorage.setItem("USER", JSON.stringify({"nombre": user.nombre, "apellidos": user.apellidos }))
                        history.push("/admin");
                    }else {
                        this.setState(() => ({
                            error: "Usuario y/o contraseña incorrecto"
                        }));
                        setTimeout(() => {
                            this.setState(() => ({
                                error: undefined
                            }));
                        }, 3000)
                    }
                }
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
                            <button onClick={this.authUser} className='loginButton'> Acceder </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
