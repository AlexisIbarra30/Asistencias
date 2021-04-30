import React from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import FormAddUser from './AdminComponents/FormAddUser';
import FormListUser from './AdminComponents/FormListUser';
import FormModifUser from './AdminComponents/FormModifUser';
import FormDelUser from './AdminComponents/FormDelUser';

export class AdminPage extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <h1 className='title'> Panel de Administrador </h1>
                <div className='container'>
                    <nav className="menu-navegacion">
                        <MenuItem titulo="Agregar Usuario"/>
                        <MenuItem titulo="Listar Usuarios"/>
                        <MenuItem titulo="Modificar Usuario"/>
                        <MenuItem titulo="Eliminar Usuario"/>
                    </nav>
                    <div className='panel' id="panel">
                        <FormAddUser/>
                    </div>
                </div>
            </div>
        );
    }


}