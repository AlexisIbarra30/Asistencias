import React from 'react';
import * as constantes from '../Constantes';

export class FormAddUser extends React.Component{
    
    state = {
        nombre:"",
        apellidos:"",
        usuario:"",
        password:"",
        tipo_usuario:"",
        programa:1,
        tipo_programa:[]
    }

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
    handleTypeUser = (tipo_usuario) => {
        this.setState(() => ({
            tipo_usuario
        }))
    }
    //Funcion para agregar usuarios
    addNewUser = () =>{
        const json = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            usuario:this.state.usuario,
            password:this.state.password,
            tipo_usuario:this.state.tipo_usuario,
            programa:this.state.programa
        }
        
        if(json.nombre.trim()=="" || json.apellidos.trim()=="" || json.usuario.trim()==""||json.password.trim()==""||json.tipo_usuario==null){
            alert("Por favor no dejar campos en blanco");
        }else{
            const url = `${constantes.PATH_API}usuarios.php`;
            fetch(url,{
                method:'POST',
                body: JSON.stringify(json)
            })
            .then(res=>res.text())
            .then(
                (data) =>{
                    var mensaje="";
                    console.log(data);
                    if(data==="correcto"){
                        mensaje="Agregado correctamente";
                    }else{
                        mensaje="Ya existe cuenta para "+this.state.nombre+" "+this.state.apellidos;
                    }
                    alert(mensaje);
                }

            );
        }
    }


    //Para llenar combo de programas
    componentDidMount = ()=>{
        const url = `${constantes.PATH_API}programas.php`;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(response => response.json())
        .then(data=>{
            this.setState(()=>({tipo_programa:data}));
        });
    }

    //Obtener valor del combobox
    onProgramaChange = (e) => {
        const programa = e.target.value;
        this.setState(() => ({ programa }))
    }


    render(){
      
        return(
            <div className="formAddUser">
                <h3>Nuevo Usuario </h3>
                <div className="form-item morespace">
                    <label>Nombre(s): </label>
                    <input type='text' id="nombre" name="nombre" onChange={this.onNombreChange} value={this.state.nombre}></input>
                </div>
                <div className="form-item morespace">
                    <label>Apellidos</label>
                    <input type='text' id="apellidos" name="apellidos" onChange={this.onApellidosChange} value={this.state.apellidos}></input>
                </div>
                <div className="form-item morespace">
                    <label>Nombre de usuario: </label>
                    <input type='text' id="usuario" name="usuario" onChange={this.onUsuarioChange} value={this.state.usuario}></input>
                </div>
                <div className="form-item">
                    <label>Contraseña: </label>
                    <input type='password' id="password" name="password" onChange={this.onPasswordChange} value={this.state.password}></input>
                </div>
                <div className="form-item morespace">
                    <label>Tipo de usuario: </label>
                    <div className="radios">
                        <div className="radio-item">
                            <input type="radio" value="0" defaultChecked name="tipo-usuario" onClick={() => { this.handleTypeUser(0) }} ></input>
                            <label>Usuario</label>
                        </div>
                       
                        <div className="radio-item">
                            <input type="radio" value="1" name="tipo-usuario" onClick={() => { this.handleTypeUser(1) }}></input>
                            <label>Administardor</label>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="buscaUser morespace">
                        <label className="morespace">Selecciona un programa: </label>
                        <select name="tipo-programa" className="morespace" onChange={this.onProgramaChange}>
                            {this.state.tipo_programa.map(
                                (tipo,index)=>{
                                    return(<option key={index} value={tipo.id} >{`${tipo.programa_nombre}`}</option>);
                                }
                            )
                            }
                        </select>
                </div>          

                <div className="btnBox smallbtn morespace">
                    <button className="registerBack nomargin" onClick={this.addNewUser}>Registrar</button>
                    <button className="registerBack nomargin">Cancelar</button>
                </div>
            </div>
        );
    }
}
export default FormAddUser;