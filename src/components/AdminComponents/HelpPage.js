import React from 'react';
import HelpItem from './HelpItem';

export default class HelpPage extends React.Component {

    render(){
        return(
            <div className="help-container">
                <div className="help-title">
                    <h3>Sección de ayuda</h3>
                </div>
                <div className="help-items">
                    <HelpItem titulo="1.- ¿Como editar chingón?" 
                    video={<iframe width="560" height="315" src="https://www.youtube.com/embed/op3pnbjH464" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                    texto = "Ejemplo uno de video editando en el fortnite"/>
                </div>
            </div>
        );
    }


}
