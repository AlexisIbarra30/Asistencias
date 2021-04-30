import React from 'react';

export class FormModifUser extends React.Component{

    render(){
        return(
            <div className="formDelUser">
                <div className="form-header">
                    <h3>Eliminar Usuario </h3>
                    <div class="buscaUser">
                        <label>Selecciona un usuario: </label>
                        <select name="user-to-del">
                        </select>
                        <button className="registerBack nomargin">Eliminar</button>
                    </div>
                </div>
                
            </div>
        );

    }
}

export default FormModifUser;