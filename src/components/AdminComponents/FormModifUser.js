import React from 'react';
import * as constantes from '../Constantes';

export class FormModifUser extends React.Component{
    
    state = {
        nombre:"",
        apellidos:"",
        usuario:"",
        password:"",
        tipo_usuario:"",
        usuarios:[],
        sendId:""
    }

    componentDidMount() {
        const url = `${constantes.PATH_API}usuarios.php`;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(response => response.json())
        .then(data=>{
            console.log(data);
            this.setState(()=>({usuarios:data}))
        });
        
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

    buscarDato =(dato,json)=>{
        var regresa="";
        json.map((fila,index)=>{
            if(fila.id == dato){
                regresa=fila;
            }
        })
        return regresa;
    }

    onChangeSelect = (e) =>{
        const sendId = e.target.value;
        const nombre = this.buscarDato(sendId,this.state.usuarios).nombre;
        const apellidos= this.buscarDato(sendId,this.state.usuarios).apellidos;
        const usuario = this.buscarDato(sendId,this.state.usuarios).usuario;
        const password = this.buscarDato(sendId,this.state.usuarios).password;
        const tipo_usuario = this.buscarDato(sendId,this.state.usuarios);
        this.setState(()=>({sendId:sendId,nombre:nombre,apellidos:apellidos,usuario:usuario,password:password}));
        this.setState(()=>{tipo_usuario});


    }

    modificaUser = ()=>{
        const json = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            usuario:this.state.usuario,
            password:this.state.password,
            tipo_usuario:this.state.tipo_usuario,
            id:this.state.sendId
        }
        
        if(json.nombre.trim()=="" || json.apellidos.trim()=="" || json.usuario.trim()==""||json.password.trim()==""){
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
                        mensaje="Modificado correctamente";
                    }
                    alert(mensaje);
                }

            );
        }
    }

    render(){
        return(
            <div className="formModifUser">
                <div className="form-header">
                    <h3>Modificar Usuario </h3>
                    <div class="buscaUser">
                        <label>Selecciona un usuario: </label>
                        <select name="user-to-modify" onChange={this.onChangeSelect}>
                            {this.state.usuarios.map(
                                (user,index)=>{
                                    return(<option key={index} value={user.id} >{`${user.nombre} ${user.apellidos}`}</option>);
                                }
                            )
                            }
                        </select>
                    </div>
                </div>
                <div className="formAddUser modifuser">
                    <div className="form-item">
                        <label>Nombre(s): </label>
                        <input type='text' id="nombre" name="nombre" onChange={this.onNombreChange} value={this.state.nombre}></input>
                    </div>
                    <div className="form-item">
                        <label>Apellidos</label>
                        <input type='text' id="apellidos" name="apellidos" onChange={this.onApellidosChange} value={this.state.apellidos}></input>
                    </div>
                    <div className="form-item">
                        <label>Nombre de usuario: </label>
                        <input type='text' id="usuario" name="usuario" onChange={this.onUsuarioChange} value={this.state.usuario}></input>
                    </div>
                    <div className="form-item">
                        <label>Contraseña: </label>
                        <input type='password' id="password" name="password" onChange={this.onPasswordChange} value={this.state.password}></input>
                    </div>
                    <div className="form-item">
                        <label>Tipo de usuario: </label>
                        <div className="radios">
                            <div className="radio-item">
                                <input type="radio" value="0" name="tipo-usuario" onClick={() => { this.handleTypeUser(0) }} id="radio0"></input>
                                <label>Usuario</label>
                            </div>
                        
                            <div className="radio-item">
                                <input type="radio" value="1" name="tipo-usuario" onClick={() => { this.handleTypeUser(1) }} id="radio1"></input>
                                <label>Administardor</label>
                            </div>
                        </div>
                    </div>
                    <div className="btnBox smallbtn">
                        <button className="registerBack nomargin" onClick={this.modificaUser}>Modificar</button>
                        <button className="registerBack nomargin">Cancelar</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default FormModifUser;