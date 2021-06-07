import React from 'react';
import * as constantes from './Constantes';

class Footer extends React.Component{
    state={
        datosFooter:[]
    }

    componentDidMount=()=>{
        const url = `${constantes.PATH_API}modifFooter.php`;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(res=>res.json())
        .then(resultado=>{
            this.setState(() => ({datosFooter:resultado}));
            //primera seccion izquierda
            document.querySelector("#footer-nombred1").innerHTML = this.state.datosFooter[0]['nombre']+' :';
            document.querySelector("#footer-nombred2").innerHTML = this.state.datosFooter[1]['nombre']+' :';
            document.querySelector("#footer-nombred3").innerHTML = this.state.datosFooter[2]['nombre']+' :';

            document.querySelector("#footer-datod1").innerHTML = this.state.datosFooter[0]['valor']+' :';
            document.querySelector("#footer-datod2").innerHTML = this.state.datosFooter[1]['valor']+' :';
            document.querySelector("#footer-datod3").innerHTML = this.state.datosFooter[2]['valor']+' :';

            //Sitios de interes
            document.querySelector("#footer-datod3").href = this.state.datosFooter[4]['valor'];
            document.querySelector("#footer-datod4").href = this.state.datosFooter[4]['valor'];
            document.querySelector("#footer-datod5").href = this.state.datosFooter[5]['valor'];
            document.querySelector("#footer-datod6").href = this.state.datosFooter[6]['valor'];
            document.querySelector("#footer-datod7").href = this.state.datosFooter[7]['valor'];
            document.querySelector("#footer-datod8").href = this.state.datosFooter[8]['valor'];

            document.querySelector("#footer-datod4").innerHTML = this.state.datosFooter[3]['nombre'];
            document.querySelector("#footer-datod5").innerHTML = this.state.datosFooter[4]['nombre'];
            document.querySelector("#footer-datod6").innerHTML = this.state.datosFooter[5]['nombre'];
            document.querySelector("#footer-datod7").innerHTML = this.state.datosFooter[6]['nombre'];
            document.querySelector("#footer-datod8").innerHTML = this.state.datosFooter[7]['nombre'];

            
           

        });
    }

    render(){
        return(
            <footer>
                <div className="datos-footer">
                    <div className="item-datos-footer">
                        <span id="footer-nombred1"></span>
                        <span id="footer-datod1"></span>
                    </div>
                    <div className="item-datos-footer">
                        <span id="footer-nombred2"></span>
                        <span id="footer-datod2"></span>
                    </div>
                    <div className="item-datos-footer">
                        <span id="footer-nombred3"></span>
                        <span id="footer-datod3"></span>
                    </div>
                </div>

                <div className="social-footer">
                    <a href="https://www.facebook.com/estudiosavanzados.fiuaem" target="_blank" id="footer-datod9">
                        <img src="./images/facebook-logo.png"></img>
                    </a>
                </div>

                <div className="webs-footer">
                    <span>Sitios de interes:</span>
                    <ul>
                        <li><a href="#" target="_blank" id="footer-datod4"></a></li>
                        <li><a href="#" target="_blank" id="footer-datod5"></a></li>
                        <li><a href="#" target="_blank" id="footer-datod6"></a></li>
                        <li><a href="#" target="_blank" id="footer-datod7"></a></li>
                        <li>
                            <a href="#" target="_blank" id="footer-datod8">
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }

}

export default Footer;
