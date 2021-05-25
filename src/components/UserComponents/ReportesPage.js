import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

class ReportesPage extends React.Component {

    state = {
        alumnos: [],
        startDate: moment(),
        endDate: moment().add(7,'days'),
        focusedInput: false
    }

    onDateChange = ({ startDate, endDate }) => {
        this.setState(() => ({startDate,endDate}));
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

    // getRegistros = ({startDate, endDate}) => {
    //     fetch('http://localhost:8000/getStudents', 
    //     )
    // }

    render() {
        return (
            <div>
                <div className='titleContainer'>
                    <h1 className='title'> Reportes </h1>
                </div>
                <div className='panel123'>
                    <div className='container'>
                        <div className="form-Item">
                            <label>Seleccione el rango en que seran <br /> generados los reportes: </label>
                            <div></div>
                            <DateRangePicker
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                                focusedInput={this.state.focusedInput} 
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                isOutsideRange={() => false}
                                noBorder={true} 
                            />
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
export default ReportesPage;