import React from 'react';
import * as constantes from '../Constantes';

export class FormModifUser extends React.Component{

    state={
        usuarios:[],
        sendId:""
    }

    componentDidMount = ()=>{
        const url = `${constantes.PATH_API}usuarios.php`;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(response => response.json())
        .then(data=>{
            this.setState(()=>({usuarios:data}));
        });
    }

    onChangeSelect = (e) =>{
        const sendId = e.target.value;
        this.setState(()=>({sendId}));
    }

    eliminarUser=()=>{
        const url = `${constantes.PATH_API}usuarios.php?id=`+this.state.sendId;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(res=>res.text())
        .then(
            data=>{
                this.componentDidMount();
                alert("Eliminado correctamente");
            }
        );
    }

    render(){
        return(
            <div className="formDelUser">
                <div className="form-header">
                    <h3>Eliminar Usuario </h3>
                    <div class="buscaUser">
                        <label>Selecciona un usuario: </label>
                        <select name="user-to-del" onChange={this.onChangeSelect}>
                            {this.state.usuarios.map(
                                (user,index)=>{
                                    return(<option key={index} value={user.id}>{`${user.nombre} ${user.apellidos}`}</option>);
                                }
                            )}
                        </select>
                        <button className="registerBack nomargin" onClick={this.eliminarUser}>Eliminar</button>
                    </div>
                </div>
                
            </div>
        );

    }
}

export default FormModifUser;