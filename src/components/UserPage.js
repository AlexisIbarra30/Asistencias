import React from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import RegisterPage from './UserComponents/RegisterPage';
import FormAddAssist from './UserComponents/FormAddAssist';
import ReportesPage from './UserComponents/ReportesPage';
import Footer from './Footer';

export default class UserPage extends React.Component {

    state = {
        renderComponent: RegisterPage
    }

    renderHandler = (renderComponent) => {
        this.setState(() => ({
            renderComponent
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <h1 className='title'> Panel de Usuario </h1>
                <div className="container">
                    <nav className="menu-navegacion">
                        <MenuItem renderHandler={this.renderHandler} Component={RegisterPage} titulo="Cargar Archivo Asistencias" />
                        <MenuItem renderHandler={this.renderHandler} Component={FormAddAssist} titulo="Registrar Asistencia" />
                        <MenuItem renderHandler={this.renderHandler} Component={ReportesPage} titulo="Generar Reportes" />
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