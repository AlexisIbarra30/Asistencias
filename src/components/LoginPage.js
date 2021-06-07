import React from 'react';
import {history} from '../routers/AppRouter';
import * as constantes from './Constantes';

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
        const json ={
            usuario: this.state.user,
            password: this.state.password,
        };

        const url = `${constantes.PATH_API}login.php`;
        console.log(url);
        // Lanzamos los datos al servidor
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(json)
        })
            .then(res => res.json())
            .catch(error => {
                console.log('Error', error)
            })
            .then(response => {
                console.log(response);
                const user = response[0];
                //Usuario comun
                if(user.valido === true && user.tipo_usuario === "0") {
                    //Guardamos en el localStorage el usuario
                    sessionStorage.setItem("USER", JSON.stringify({"id":user.id,"nombre": user.nombre, "apellidos": user.apellidos,"programa":user.programa_nombre, "programa_id":user.programa_id}))
                    history.push("/user");
                }else {
                    // Administrador
                    if(user.valido === true && user.tipo_usuario === "1") {
                        //Guardamos en el localStorage el usuario
                        sessionStorage.setItem("USER", JSON.stringify({"id":user.id,"nombre": user.nombre, "apellidos": user.apellidos,"programa":user.programa_nombre,  "programa_id":user.programa_id}))
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
                    <a href = "https://www.uaemex.mx/" target="_blank">
                        <img src='./images/logo.png' className='loginImage' />
                    </a>
                    <h2 className='loginTitle'>Sistema de Registro de Asistencia</h2>
                    <h3 className='loginTitle'> Iniciar sesión </h3>
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
