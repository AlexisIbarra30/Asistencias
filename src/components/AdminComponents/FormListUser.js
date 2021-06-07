import React from 'react';
import * as constantes from '../Constantes';

export class FormListUser extends React.Component{

    state = {
        usuarios:[]
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
    

    render(){
        return(
            <div className="formListUser">
                <h3>Lista de Usuarios </h3>
                <div className="tabla">
                    <div className='registerHeader'>
                        <h4> ID </h4>
                        <h4> Nombre </h4>
                        <h4> Apellidos </h4>
                        <h4> Nombre de Usuario </h4>
                        <h4> Programa</h4>
                    </div>
                    <div className="tablaScroll"> 
                        {this.state.usuarios.map(
                                (user,index)=>{
                                    return(
                                        <div className='registerHEader' key={index}>
                                            <h3> {user.id} </h3>
                                            <h3> {user.nombre} </h3>
                                            <h3> {user.apellidos} </h3>
                                            <h3> {user.usuario} </h3>
                                            <h3> {user.programa_nombre} </h3>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>

                

            </div>
        );

    }
}

export default FormListUser;