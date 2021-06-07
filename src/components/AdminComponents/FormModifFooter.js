import React from 'react';
import * as constantes from '../Constantes';

export default class FormModifFooter extends React.Component {
    state = {
        nombred1:undefined,
        datod1:undefined,
        nombred2:undefined,
        datod2:undefined,
        nombred3:undefined,
        datod3:undefined,
        nombred4:undefined,
        datod4:undefined,
        nombred5:undefined,
        datod5:undefined,
        nombred6:undefined,
        datod6:undefined,
        nombred7:undefined,
        datod7:undefined,
        nombred8:undefined,
        datod8:undefined,
        datod9:undefined,
        datosFooter:[]
    }

    //Funciones captura de datos:
    onNombred1change = (e) => {
        const nombred1 = e.target.value;
        this.setState(() => ({ nombred1 }))
    }
    onNombred2change = (e) => {
        const nombred2 = e.target.value;
        this.setState(() => ({ nombred2 }))
    }
    onNombred3change = (e) => {
        const nombred3 = e.target.value;
        this.setState(() => ({ nombred3 }))
    }
    onNombred4change = (e) => {
        const nombred4 = e.target.value;
        this.setState(() => ({ nombred4 }))
    }
    onNombred5change = (e) => {
        const nombred5 = e.target.value;
        this.setState(() => ({ nombred5 }))
    }
    onNombred6change = (e) => {
        const nombred6 = e.target.value;
        this.setState(() => ({ nombred6 }))
    }
    onNombred7change = (e) => {
        const nombred7 = e.target.value;
        this.setState(() => ({ nombred7 }))
    }
    onNombred8change = (e) => {
        const nombred8 = e.target.value;
        this.setState(() => ({ nombred8 }))
    }

    onDatod1change = (e) => {
        const datod1 = e.target.value;
        this.setState(() => ({ datod1 }))
    }   
    onDatod2change = (e) => {
        const datod2 = e.target.value;
        this.setState(() => ({ datod2 }))
    }  
    onDatod3change = (e) => {
        const datod3 = e.target.value;
        this.setState(() => ({ datod3 }))
    }  
    onDatod4change = (e) => {
        const datod4 = e.target.value;
        this.setState(() => ({ datod4 }))
    }  
    onDatod5change = (e) => {
        const datod5 = e.target.value;
        this.setState(() => ({ datod5 }))
    }  
    onDatod6change = (e) => {
        const datod6 = e.target.value;
        this.setState(() => ({ datod6 }))
    }  
    onDatod7change = (e) => {
        const datod7 = e.target.value;
        this.setState(() => ({ datod7 }))
    }  
    onDatod8change = (e) => {
        const datod8 = e.target.value;
        this.setState(() => ({ datod8 }))
    }  
    onDatod9change = (e) => {
        const datod9 = e.target.value;
        this.setState(() => ({ datod9 }))
    }  
//Funciones para recuperar y modificar datos footer

    componentDidMount=()=>{
        const url = `${constantes.PATH_API}modifFooter.php`;
        fetch(url,{
            method:'GET',
            mode:'cors'
        }).then(res=>res.json())
        .then(resultado=>{
            this.setState(() => ({datosFooter:resultado}));
            //Guardamos los datos en los states
            document.querySelector("#nombred1").value=this.state.nombred1 = this.state.datosFooter[0]['nombre'];
            document.querySelector("#nombred2").value=this.state.nombred2 = this.state.datosFooter[1]['nombre'];
            document.querySelector("#nombred3").value=this.state.nombred3 = this.state.datosFooter[2]['nombre'];
            document.querySelector("#nombred4").value=this.state.nombred4 = this.state.datosFooter[3]['nombre'];
            document.querySelector("#nombred5").value=this.state.nombred5 = this.state.datosFooter[4]['nombre'];
            document.querySelector("#nombred6").value=this.state.nombred6 = this.state.datosFooter[5]['nombre'];
            document.querySelector("#nombred7").value=this.state.nombred7 = this.state.datosFooter[6]['nombre'];
            document.querySelector("#nombred8").value=this.state.nombred8 = this.state.datosFooter[7]['nombre'];

            document.querySelector("#datod1").value=this.state.datod1 = this.state.datosFooter[0]['valor'];
            document.querySelector("#datod2").value=this.state.datod2 = this.state.datosFooter[1]['valor'];
            document.querySelector("#datod3").value=this.state.datod3 = this.state.datosFooter[2]['valor'];
            document.querySelector("#datod4").value=this.state.datod4 = this.state.datosFooter[3]['valor'];
            document.querySelector("#datod5").value=this.state.datod5 = this.state.datosFooter[4]['valor'];
            document.querySelector("#datod6").value=this.state.datod6 = this.state.datosFooter[5]['valor'];
            document.querySelector("#datod7").value=this.state.datod7 = this.state.datosFooter[6]['valor'];
            document.querySelector("#datod8").value=this.state.datod8 = this.state.datosFooter[7]['valor'];
            document.querySelector("#datod9").value=this.state.datod9 = this.state.datosFooter[8]['valor'];
        });
        
    }

    modificaFooter=()=>{
        let json = {
            "nombre1":this.state.nombred1,
            "nombre2":this.state.nombred2,
            "nombre3":this.state.nombred3,
            "nombre4":this.state.nombred4,
            "nombre5":this.state.nombred5,
            "nombre6":this.state.nombred6,
            "nombre7":this.state.nombred7,
            "nombre8":this.state.nombred8,
            "dato1":this.state.datod1,
            "dato2":this.state.datod2,
            "dato3":this.state.datod3,
            "dato4":this.state.datod4,
            "dato5":this.state.datod5,
            "dato6":this.state.datod6,
            "dato7":this.state.datod7,
            "dato8":this.state.datod8,
            "dato9":this.state.datod9
        }

        const url = `${constantes.PATH_API}modifFooter.php`;
        fetch(url,{
            method:'POST',
            mode:'cors',
            body:JSON.stringify(json)
        }).then(res=>res.text())
        .then(datos=>{
            alert("Datos modificados. Recargue la pagina para aplicar los cambios.");
        });

    }



    render(){
        return(
            <div className="form-container">
                <div clasName="form-title"><h3>Modificar datos del pie de pagina</h3></div>
                <div className="form-items-container">
                    <div className="seccion">
                        <h4>Datos del sitio: </h4>
                        <div className="seccion-item">
                            <span className="numero">1.-</span>
                            <input type="text" name="nombred1" id="nombred1" onChange = {this.onNombred1change}/>
                            <input type="text" name="datod1" id="datod1" onChange = {this.onDatod1change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">2.-</span>
                            <input type="text" name="nombred2" id="nombred2" onChange = {this.onNombred2change}/>
                            <input type="text" name="datod2" id="datod2" onChange = {this.onDatod2change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">3.-</span>
                            <input type="text" name="nombred3" id="nombred3" onChange = {this.onNombred3change}/>
                            <input type="text" name="datod3" id="datod3" onChange = {this.onDatod3change}/>
                        </div>

                    </div>

                    <div className="seccion">
                        <h4>Social: </h4>
                        <div className="seccion-item">
                            <span className="numero">4.-</span>
                            <label>Facebook: </label>
                            <input type="text" name="datod9" id="datod9" onChange = {this.onDatod9change}/>
                        </div>
                    </div>

                    <div className="seccion">
                        <h4>Sitios de interes:</h4>
                        <div className="seccion-item">
                            <span className="subtitulo">Nombre</span>
                            <span className="subtitulo">Dirección URL</span>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">5.-</span>
                            <input type="text" name="nombred4" id="nombred4" onChange = {this.onNombred4change}/>
                            <input type="text" name="datod4" id="datod4" onChange = {this.onDatod4change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">6.-</span>
                            <input type="text" name="nombred5" id="nombred5" onChange = {this.onNombred5change}/>
                            <input type="text" name="datod5" id="datod5" onChange = {this.onDatod5change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">7.-</span>
                            <input type="text" name="nombred6" id="nombred6" onChange = {this.onNombred6change}/>
                            <input type="text" name="datod6" id="datod6" onChange = {this.onDatod6change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">8.-</span>
                            <input type="text" name="nombred7" id="nombred7" onChange = {this.onNombred7change}/>
                            <input type="text" name="datod7" id="datod7" onChange = {this.onDatod7change}/>
                        </div>
                        <div className="seccion-item">
                            <span className="numero">9.-</span>
                            <input type="text" name="nombred8" id="nombred8" onChange = {this.onNombred8change}/>
                            <input type="text" name="datod8" id="datod8" onChange = {this.onDatod8change}/>
                        </div>
                    </div>
                    <div className="seccion">
                        <button className="registerBack buttons" onClick={this.modificaFooter}>Modificar</button>
                    </div>

                </div>
            </div>
        );
    }
}