import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import * as constantes from '../Constantes';

class FormAddAssist extends React.Component {

    state = {
        alumnos: [],
        date: moment(),
        focused: false,
        hora_entrada: "09:00:00",
        hora_salida: "12:00:00",
        nombre: undefined,
        apellidos: undefined,
        horas_permanencia: 1
    }

    onDateChange = (date) => {
        this.setState(() => ({ date }));
    }

    onFocusChange = (focused) => {
        this.setState(() => ({ focused }))
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentDidMount() {
        let user = JSON.parse(sessionStorage.getItem("USER"));
        let programa = user.programa_id;
        let json = new URLSearchParams({
            programa
        });
        
        let url = `${constantes.PATH_API}alumnos.php?${json.toString()}`;
        // Lanzamos el fetch para obtener la lista de alumnos

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .catch(error => {
                console.log('Error', error)
            })
            .then(data => {
                this.setState(() => ({ alumnos: data, nombre: data[0].nombre, apellidos: data[0].apellidos }))
            });
    }

    //Guarda los registros en la BD
    guardaBD = () => {

        // Procesamos la fecha
        console.log(this.state.date);
        let cadena = JSON.stringify(moment(this.state.date._d, "YYYY-MM-DD")._i);
        cadena = cadena.split("T");
        cadena = JSON.stringify(cadena[0]).split("\"");
        let fecha_inicio = cadena[2];

        // Direccion a donde va a ir la solicitud
        const url = `${constantes.PATH_API}addAssist.php`;

        //Validamos que la fecha no sea mayor a la actual antes de agregar asistencia
        var fecha_actual = moment();
        if(fecha_actual < this.state.date){
            alert("No puede ingresar asistencias en fechas futuras");
        }else{
            let user = JSON.parse(sessionStorage.getItem("USER"));
            // Empaquetado de los datos
            let datos = {
                "nombre": this.state.nombre,
                "apellidos": this.state.apellidos,
                "fecha": fecha_inicio,
                "hora_entrada": this.state.hora_entrada,
                "hora_salida": this.state.hora_salida,
                "horas_permanencia": this.state.horas_permanencia,
                "programa":user.programa_id
            }
            console.log(datos);
            // Creamos el arreglo que enviaremos
            var json = [];
            
            // Metemos los datos en el paquete
            json.push(datos)

            //Enviamos json al servidor
            fetch(url, {
                method: 'POST',
                mode:'cors',
                body: JSON.stringify(datos)
            })
                .then(res => res.json())
                .then(
                    (data) => {
                        var mensaje = "";
                        if (data['nuevos'] == 0) {
                            mensaje = `No agregado. Ya existe asistencia registrada en esa fecha.`;
                        } else if (data['nuevos'] != 0) {
                            mensaje = `Se agreg?? registro de asistencia correctamente`;
                        }
                        alert(mensaje);
                    }
                );
        }
    }

    onUserChange = (e) => {
        const nomComp = e.target.value.split("|");
        this.setState(() => ({
            nombre: nomComp[0],
            apellidos: nomComp[1]
        }))
    }

    onHourChange = (e) => {
        const horas_permanencia = e.target.value
        console.log(horas_permanencia);
        this.setState(() => ({horas_permanencia}))
    }

    render() {
        return (
            <div>
                <div className='titleContainer'>
                    <h1 className='title'> Registro de Asistencia </h1>
                </div>
                <div className='panel123'>
                    <div className="formAddUser">
                        <div className="form-item">
                            <label>Seleccione un estudiante: </label>
                            <select onChange={this.onUserChange} name="user-to-del" className="hours">
                                {this.state.alumnos.map((alumno, index) => {
                                    return (
                                        <option value={`${alumno.nombre}|${alumno.apellidos}`} key={index}>{`${alumno.nombre} ${alumno.apellidos}`}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-item">
                            <label>Seleccione la <br />fecha asistida <br/>(mm/dd/aaaa): </label>
                            <SingleDatePicker
                                date={this.state.date}
                                onDateChange={date => this.setState({ date })}
                                focused={this.state.focused}
                                onFocusChange={({ focused }) => this.setState({ focused })}
                                numberOfMonths={1}
                                noBorder={true}
                                enableOutsideDays={true}
                                isOutsideRange={() => false}
                                readOnly={true}
                            />
                        </div>
                        <div className="form-item">
                            <label>Seleccione las <br />horas asistidas: </label>
                            <select onChange={this.onHourChange} name="user-to-del" className='horas' >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((horas, index) => {
                                    return (
                                        <option value={`${horas}`} key={index}>{`${horas}`}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="btnBox smallbtn">
                            <button style={{ visibility: 'hidden' }} onClick={this.onHandleSubmit} className="registerBack nomargin">Cancelar</button>
                            <button onClick={this.guardaBD} className="registerBack nomargin">Registrar</button>
                        </div>
                    </div>
                </div>
                <div className='container'>
                </div>
            </div>
        );
    }
}
export default FormAddAssist;