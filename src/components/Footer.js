import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <footer>
                <div className="datos-footer">
                    <div className="item-datos-footer">
                        <span>Sitio Web:</span>
                        <span>Coordinación de Estudios Avanzados Facultad de Ingeniería.</span>
                    </div>
                    <div className="item-datos-footer">
                        <span>Telefono de contacto:</span>
                        <span>(+52 722) 214 08 55 y 214 07 95. Ext. 1124</span>
                    </div>
                    <div className="item-datos-footer">
                        <span>Correo Coordinación de Estudios Avanzados: </span>
                        <span>cea-fi@outlook.com</span>
                    </div>
                </div>

                <div className="social-footer">
                    <a href="https://www.facebook.com/estudiosavanzados.fiuaem">
                        <img src="./images/facebook-logo.png"></img>
                    </a>
                </div>
                <div className="webs-footer">
                    <span>Sitios de interes:</span>
                    <ul>
                        <li><a href="#">Pagina 1</a></li>
                        <li><a href="#">Pagina 2</a></li>
                        <li><a href="#">Pagina 3</a></li>
                        <li><a href="#">Pagina 4</a></li>
                    </ul>
                </div>
            </footer>
        );
    }

}

export default Footer;
