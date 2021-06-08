import React from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import FormAddUser from './AdminComponents/FormAddUser';
import FormListUser from './AdminComponents/FormListUser';
import FormModifUser from './AdminComponents/FormModifUser';
import FormDelUser from './AdminComponents/FormDelUser';
import HelpPage from './AdminComponents/HelpPage';
import Footer from './Footer';
import FormModifFooter from './AdminComponents/FormModifFooter';
import ProgramsPage from './AdminComponents/ProgramsPage';
import {history} from '../routers/AppRouter';

export default class AdminPage extends React.Component {

    state = {
        renderComponent: FormAddUser
    }

    renderHandler = (renderComponent) => {
        this.setState(() => ({
            renderComponent
        }));
    }

    valida_sesion=()=>{
        let user = JSON.parse(sessionStorage.getItem("USER"));
        if(user==null){
            history.push('/');
            location.reload();
        }
    }


    render(){
        {this.valida_sesion()}
        return(
            <div>
                <Header />
                <h1 className='title'> Panel de Administrador </h1>
                <div className='container'>
                    <nav className="menu-navegacion">
                        <MenuItem renderHandler={this.renderHandler} Component={FormAddUser} titulo="Agregar Usuario"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormListUser} titulo="Listar Usuarios"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormModifUser} titulo="Modificar Usuario"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormDelUser} titulo="Eliminar Usuario"/>
                        <MenuItem renderHandler={this.renderHandler} Component={FormModifFooter} titulo="Modificar Pie de Pagina"/>
                        <MenuItem renderHandler={this.renderHandler} Component={ProgramsPage} titulo="Programas"/>
                        <MenuItem renderHandler={this.renderHandler} Component={HelpPage} titulo="Ayuda"/>
                    </nav>
                    <div className='panel' id="panel">
                        <this.state.renderComponent/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}