import React from 'react';

export class FormModifUser extends React.Component{

    render(){
        return(
            <div className="formModifUser">
                <div className="form-header">
                    <h3>Modificar Usuario </h3>
                    <div class="buscaUser">
                        <label>Selecciona un usuario: </label>
                        <select name="user-to-modify">

                        </select>
                    </div>
                </div>
                <div className="formAddUser modifuser">
                    <div className="form-item">
                        <label>Nombre(s): </label>
                        <input type='text'></input>
                    </div>
                    <div className="form-item">
                        <label>Apellidos</label>
                        <input type='text'></input>
                    </div>
                    <div className="form-item">
                        <label>Nombre de usuario: </label>
                        <input type='text'></input>
                    </div>
                    <div className="form-item">
                        <label>Contraseña: </label>
                        <input type='password'></input>
                    </div>
                    <div className="form-item">
                        <label>Tipo de usuario: </label>
                        <div className="radios">
                            <div className="radio-item">
                                <input type="radio" value="0" name="tipo-usuario"></input>
                                <label>Usuario</label>
                            </div>
                        
                            <div className="radio-item">
                                <input type="radio" value="1" name="tipo-usuario"></input>
                                <label>Administardor</label>
                            </div>
                        </div>
                    </div>
                    <div className="btnBox smallbtn">
                        <button className="registerBack nomargin">Registrar</button>
                        <button className="registerBack nomargin">Cancelar</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default FormModifUser;