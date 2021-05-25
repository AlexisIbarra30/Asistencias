import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class FormAddAssist extends React.Component {

    state = {
        alumnos: [],
        date: moment(),
        focused: false
    }

    onDateChange = (date) => {
        this.setState(() => ({date}));
    }

    onFocusChange = (focused) => {
        this.setState(() => ({focused}))
    }

    componentDidMount() {

        // Lanzamos el fetch para obtener la lista de alumnos

        fetch('http://localhost:8000/getStudents')
            .then(response => response.json())
            .then(data => {
                console.log(data.Students);
                this.setState(() => ({ alumnos: data.Students }))
            });
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
                            <select name="user-to-del" className="hours">
                                {this.state.alumnos.map((alumno, index) => {
                                    return (
                                        <option key={index}>{`${alumno.nombre} ${alumno.apellidos}`}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-item">
                            <label>Seleccione la <br />fecha asistida: </label>
                            <SingleDatePicker
                                date={this.state.date} 
                                onDateChange={date => this.setState({ date })} 
                                focused={this.state.focused} 
                                onFocusChange={({ focused }) => this.setState({ focused })}
                                numberOfMonths={1}
                                noBorder={true}
                                enableOutsideDays={true}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div className="form-item">
                            <label>Seleccione las <br />horas asistidas: </label>
                            <select name="user-to-del" className='horas' >
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map((horas, index) => {
                                return (
                                    <option key={index}>{`${horas}`}</option>
                                );
                            })}
                            </select>
                        </div>
                        <div className="btnBox smallbtn">
                            <button onClick={this.onHandleSubmit} className="registerBack nomargin">Cancelar</button>
                            <button onClick={this.onHandleSubmit} className="registerBack nomargin">Registrar</button>
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