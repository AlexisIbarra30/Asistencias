import React from 'react';
import * as constantes from '../Constantes';

class FormModifUser extends React.Component {

    state = {
        id: undefined,
        nombre: "",
        apellidos: "",
        usuario: "",
        password: "",
        tipo_usuario: "",
        usuarios: [],
        sendId: "",
        name: undefined,
        programa: undefined
    }

    componentDidMount = () => {
        this.getUserName();
        const url = `${constantes.PATH_API}usuarios.php`;
        fetch(url, {
            method: 'GET',
            mode: 'cors'
        }).then(response => response.json())
            .then(data => {
                const usuario = data.find(user => user.nombre === this.state.name);
                console.log(usuario);
                this.setState(() => ({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellidos: usuario.apellidos,
                    usuario: usuario.usuario,
                    password: usuario.password,
                    tipo_usuario: usuario.tipo_usuario
                }))

            });
    }

    getUserName = () => {
        let user = JSON.parse(sessionStorage.getItem("USER"));
        this.setState(() => ({ name: user.nombre, programa: user.programa }));
    };

    //Captura de datos 
    onNombreChange = (e) => {
        const nombre = e.target.value;
        this.setState(() => ({ nombre }))
    }
    onApellidosChange = (e) => {
        const apellidos = e.target.value;
        this.setState(() => ({ apellidos }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    }

    onUsuarioChange = (e) => {
        const usuario = e.target.value;
        this.setState(() => ({ usuario }))
    }

    modificaUser = (e) => {
        const json = {
            id: this.state.id,
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            usuario: this.state.usuario,
            password: this.state.password,
            tipo_usuario: this.state.tipo_usuario,
        }
        console.log(json);
        if (json.nombre.trim() == "" || json.apellidos.trim() == "" || json.usuario.trim() == "" || json.password.trim() == "") {
            alert("Por favor no dejar campos en blanco");
        } else {
            const url = `${constantes.PATH_API}usuarios.php`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(json)
            })
                .then(res => res.text())
                .then(
                    (data) => {
                        var mensaje = "";
                        console.log(data);
                        if (data === "correcto") {
                            mensaje = "Modificado correctamente";
                        }
                        alert(mensaje);
                    }

                );
        }
    }

    render() {
        return (
            <div className="formModifUser">
                <h1 className='title'>Modificar Usuario </h1>
                <div className="formAddUser modifuser" >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: 16 }}>
                        <div style={{ width: '60%' }}>
                            <div className="form-item">
                                <label>Nombre(s): </label>
                                <input type='text' id="nombre" name="nombre" onChange={this.onNombreChange} value={this.state.nombre}></input>
                            </div>
                            <br />
                            <br />
                            <div className="form-item">
                                <label>Apellidos</label>
                                <input type='text' id="apellidos" name="apellidos" onChange={this.onApellidosChange} value={this.state.apellidos}></input>
                            </div>
                            <br />
                            <br />
                            <div className="form-item">
                                <label>Nombre de usuario: </label>
                                <input type='text' id="usuario" name="usuario" onChange={this.onUsuarioChange} value={this.state.usuario}></input>
                            </div>
                            <br />
                            <br />
                            <div className="form-item">
                                <label>Contraseña: </label>
                                <input type='text' id="password" name="password" onChange={this.onPasswordChange} value={this.state.password}></input>
                            </div>
                            <br />
                            <br />
                            <div className="btnBox smallbtn">
                                <button className="registerBack nomargin" onClick={this.modificaUser}>Modificar</button>
                                <button className="registerBack nomargin">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default FormModifUser;