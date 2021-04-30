import React from 'react';

export class FormAddUser extends React.Component{
    render(){
        return(
            <div className="formAddUser">
                <h3>Nuevo Usuario </h3>
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
        );
    }
}
export default FormAddUser;