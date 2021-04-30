import React from 'react';

const MenuItem = (props) =>{
    return(
        <div className="menu-item">
            <div className="titulo">
                <span>{props.titulo}</span>
            </div>
            <div className="icono">
                <img src={props.icono}></img>
            </div>
        </div>
    );
}

export default MenuItem;