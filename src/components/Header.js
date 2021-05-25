import React from 'react';

const Header = () => (
    <div>
        <div className='header'>
            <div className='header__container'>
                <img src='./images/logo.png'/>
                <button><img src='./images/logout.svg' /></button>
            </div>  
        </div>
        <div className='bottom'></div>
    </div>
    );

export default Header;