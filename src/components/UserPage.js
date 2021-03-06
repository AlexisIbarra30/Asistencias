import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import MenuItem from './MenuItem';
import RegisterPage from './UserComponents/RegisterPage';
import FormAddAssist from './UserComponents/FormAddAssist';
import ReportesPage from './UserComponents/ReportesPage';
import FormModifUser from './UserComponents/FormModifUser';
import HelpPage from './UserComponents/HelpPage';
import Footer from './Footer';
import {history} from '../routers/AppRouter';

export default class UserPage extends React.Component {

    state = {
        renderComponent: RegisterPage,
        name: undefined,
        programa: undefined
    }

    componentDidMount() {
        this.getUserName();
    }

    getUserName = () => {
        let user = JSON.parse(sessionStorage.getItem("USER"));
        this.setState(() => ({name: user.nombre, programa: user.programa}));
    };

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

    render() {
        {this.valida_sesion()}
        return (
            <div>
                <Header />
                <h1 className='title' style={{color:'#27823F', fontSize: 30, marginTop: 60, marginBottom: 25}}> Panel de Coordinador: {this.state.programa}</h1>
                <div className="container">
                    <nav className="menu-navegacion">
                        <MenuItem renderHandler={this.renderHandler} Component={RegisterPage} titulo="Cargar Archivo Asistencias " />
                        <MenuItem renderHandler={this.renderHandler} Component={FormAddAssist} titulo="Registrar Asistencia " />
                        <MenuItem renderHandler={this.renderHandler} Component={ReportesPage} titulo="Generar Reportes " />
                        <MenuItem renderHandler={this.renderHandler} Component={FormModifUser} titulo="Perfil de Usuario " />
                        <MenuItem renderHandler={this.renderHandler} Component={HelpPage} titulo="Ayuda " />
                    </nav>
                    <div className='Panel'>
                        <this.state.renderComponent/>
                    </div>
                </div>
                <Footer />
                
            </div>
        );
    }
}