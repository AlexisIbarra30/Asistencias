import React from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import FormAddUser from './AdminComponents/FormAddUser';
import FormListUser from './AdminComponents/FormListUser';
import FormModifUser from './AdminComponents/FormModifUser';
import FormDelUser from './AdminComponents/FormDelUser';

export class AdminPage extends React.Component {

    state = {
        renderComponent: FormAddUser
    }

    renderHandler = (renderComponent) => {
        this.setState(() => ({
            renderComponent
        }));
    }

    render(){
        return(
            <div>
                <Header/>
                <h1 className='title'> Panel de Administrador </h1>
                <div className='container'>
                    <nav className="menu-navegacion">
                        <MenuItem renderHandler={this.renderHandler} Component={FormAddUser} titulo="Agregar Usuario"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormListUser} titulo="Listar Usuarios"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormModifUser} titulo="Modificar Usuario"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormDelUser} titulo="Eliminar Usuario"/>
                    </nav>
                    <div className='panel' id="panel">
                        <this.state.renderComponent/>
                    </div>
                </div>
            </div>
        );
    }
}