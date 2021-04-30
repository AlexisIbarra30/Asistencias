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
                        <MenuItem onClick={() => {
                            console.log('hola')
                            this.renderHandler(FormAddUser)
                        }} titulo="Agregar Usuario"/>
                        <MenuItem onClick={() => {
                            console.log('hola')
                            this.renderHandler(FormListUser)
                        }} titulo="Listar Usuarios"/>
                        <MenuItem onClick={() => {
                            console.log('hola')
                            this.renderHandler(FormModifUser)
                        }} titulo="Modificar Usuario"/>
                        <MenuItem onClick={() => {
                            console.log('hola')
                            this.renderHandler(FormDelUser)
                        }} titulo="Eliminar Usuario"/>
                    </nav>
                    
                    <div className='panel' id="panel">
                        <this.state.renderComponent/>
                    </div>
                </div>
            </div>
        );
    }
}