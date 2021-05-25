import React from 'react';

const Header = () => (
    <div>
        <div className='header'>
            <div className='header__container'>
                <div class="header_logos">
                    <img src='./images/logo.png'/>
                    <img src='./images/fingenieria-min.png'/>
                </div>
                <div class="header_session">
                    <span class="current_user">Bienvenido: </span>
                    <button>Cerrar sesión</button>
                </div>
                
                
            </div>  
        </div>
        <div className='bottom'></div>
    </div>
    );

export default Header;