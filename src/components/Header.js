import React from 'react';
import {history} from '../routers/AppRouter';

export default class Header extends React.Component {

    state = {
        name: undefined,
        programa:undefined
    }

    componentDidMount() {
        this.getUserName();
    }

    getUserName = () => {
        let user = JSON.parse(sessionStorage.getItem("USER"));
        this.setState(() => ({name: user.nombre}))
        this.setState(() => ({programa: user.programa}))
        console.log(user.nombre);
    };

    handleClose = () => {
        sessionStorage.clear();
        history.push('/');
    }

    render() {
        return (
            <div>
        <div className='header'>
            <div className='header__container'>
                <div class="header_logos">
                    <a href="https://www.uaemex.mx/" target="_blank">
                        <img src='./images/logo.png' />
                    </a>
                    <a href="http://fingenieria.uaemex.mx/portal/inicio/home.php" target="_blank">
                        <img src='./images/fingenieria-min.png' />
                    </a>
                </div>
            </div>
        </div>
        <div className='bottom'></div>
        <div className='headerLogout'>
            <div className='logoutContainer'>
                <div className='logoutItem'>
                    <button className='headerImages'><img className='headerImages' src='./images/user.svg' /></button>
                    <p className='logoutText'>Bienvenido de vuelta: {this.state.name}</p>
                </div>
                <div className='logoutItem'>
                    <span class="logoutText">{this.state.programa}</span>
                </div>
                <div className='logoutItem'>
                    <button onClick={this.handleClose} className='headerImages'><img className='headerImages' src='./images/logout.svg' /></button>
                    <p onClick={this.handleClose} className='logoutText'>Cerrar sesion</p>
                </div>  
            </div>
        </div>
    </div>
        );
    }
} 