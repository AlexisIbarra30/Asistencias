import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import jsPDF from 'jspdf';
import ListItemReportes from './ListItemsReportes';
import * as constantes from '../Constantes';

class ReportesPage extends React.Component {

    state = {
        alumnos: [],
        startDate: moment().subtract(2, 'year'),
        endDate: moment(),
        focusedInput: null,
        fchI: undefined,
        fchF: undefined,
        name: undefined,
        programa: undefined
    }

    componentDidMount() {
        this.getRegistros();
        this.getUserName();
    }

    getUserName = () => {
        let user = JSON.parse(sessionStorage.getItem("USER"));
        this.setState(() => ({name: user.nombre, programa: user.programa}));
    };

    getRegistros = () => {
        // LLenamos el JSON de la solicitud
        console.log(this.state.startDate);
        let cadena = JSON.stringify(moment(this.state.startDate._d, "YYYY-MM-DD")._i);
        cadena = cadena.split("T");
        cadena = JSON.stringify(cadena[0]).split("\"")
        let fecha_inicio = cadena[2];

        let cadena2 = JSON.stringify(moment(this.state.endDate._d, "YYYY-MM-DD")._i);
        cadena2 = cadena2.split("T");
        cadena2 = JSON.stringify(cadena2[0]).split("\"")
        let fecha_fin = cadena2[2];

        this.setState(() => ({
            fchI: fecha_inicio,
            fchF: fecha_fin
        }));

        let user = JSON.parse(sessionStorage.getItem("USER"));
        let programa = user.programa_id;

        let json = new URLSearchParams({
            fecha_inicio,
            fecha_fin,
            programa
        });
        
        let url = `${constantes.PATH_API}total_horas.php?${json.toString()}`;
        console.log(url)
        // Lanzamos el fetch para obtener la lista de alumnos
        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState(() => ({ alumnos: data }))
            });
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onDatesChange = ({ cadena, endDate }) => {
        this.setState(() => ({ cadena, endDate }));
    }

    focusedInput = ({ focusedInput }) => {
        this.setState(() => ({ focusedInput }))
    }

    generatePDF = () => {
        // Creamos nuestro documento pdf
        let image = "./images/logo.png";
        let x = 20;
        let y = 0;
        let width = 70;
        let height = 25;
        let doc = new jsPDF();
        doc.addImage(
            image,
            "PNG",
            x,
            y,
            width,
            height
        );
        
        image = "./images/fingenieria-min.png";
        x = 140;
        width = 40
        
        doc.addImage(
            image,
            "PNG",
            x,
            y,
            width,
            height
        );
        
        //fondo: #2D5438
        //texto: #FFFFFF
        doc.setFontSize(18);
        doc.text(`Cordinacion de Estudios Avanzados`, 50,40);
        doc.text(this.state.programa, 50,50);
        doc.text(`Registro de asistencias, de ${this.state.fchI} hasta ${this.state.fchF}`, 30,60);
        doc.setFontSize(10);
        //doc.cell(5, 70, 200, 300,'  Nombre        Apellidos            Fecha Inicio      Fecha Final      Horas Totales  ', 1);
        doc.cell(15,70,45,10,'Nombre',5,'c');
        doc.cell(15,70,45,10,'Apellidos',5,'c');
        doc.cell(15,70,30,10,'Fecha Inicio',5,'c');
        doc.cell(15,70,30,10,'Fecha Final',5,'c');
        doc.cell(15,70,30,10,'Horas Totales',5,'c');
        y = 90;
        doc.setFontSize(9);
        this.state.alumnos.forEach((asistencia, index) => {
          /*  doc.text(`  ${asistencia.nombre}    ${asistencia.apellidos}    ${this.state.fchI}     ${this.state.fchF}      ${asistencia.total_horas}`, 5, y);
            y = y +10;
            if(index > 18) {
                return false;
            }*/
            var temp_y = 70;
            if(index>0 && index%20==0){doc.cellAddPage();temp_y = 10;
                doc.setFontSize(10);
                doc.cell(15,temp_y,45,10,'Nombre',5,'c');
                doc.cell(15,temp_y,45,10,'Apellidos',5,'c');
                doc.cell(15,temp_y,30,10,'Fecha Inicio',5,'c');
                doc.cell(15,temp_y,30,10,'Fecha Final',5,'c');
                doc.cell(15,temp_y,30,10,'Horas Totales',5,'c');
                doc.setFontSize(9);
            }
            doc.cell(15,temp_y,45,8,`${asistencia.nombre}`,index,y);
            doc.cell(15,temp_y,45,8,`${asistencia.apellidos}`,index,y);
            doc.cell(15,temp_y,30,8,`${this.state.fchI}`,index,y);
            doc.cell(15,temp_y,30,8,`${this.state.fchF}`,index,y);
            doc.cell(15,temp_y,30,8,`${asistencia.total_horas}`,index,y);
            y = y +10;
            
            
        });

        doc.save("Asistencias.pdf");
    }
    

    render() {
        return (
            <div>
                <div className='titleContainer'>
                    <h1 className='title'> Reportes </h1>
                </div>
                <span style={{margin:10}}>** Solamente se muestran a los alumnos que pertenecen a la maestria/doctorado</span>

                <div className='panel123'>
                    <div className='container'>
                        <div className="form-Item">
                            <label style={{margin: 30}}> Rango en que seran generados: </label>
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => {
                                    this.setState({ startDate, endDate })
                                    this.getRegistros();
                                }} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                isOutsideRange={() => false}
                                readOnly={true}
                            />
                        </div>
                        <div className='registerHeader reg regHeader'>
                            <h3> Nombre </h3>
                            <h3> Apellidos </h3>
                            <h3> Fecha Inicio </h3>
                            <h3> Fecha Final </h3>
                            <h3> Horas Totales </h3>
                        </div>
                        <div className="tablaScroll">
                            {
                                // Revisamos cuantos registros se encontraron
                                this.state.alumnos.length > 0 ?
                                // Renderizamos las asistencias
                                (this.state.alumnos.map((asistencia, index) => (
                                    <ListItemReportes
                                        key={index}
                                        nombre={asistencia.nombre}
                                        apellidos={asistencia.apellidos}
                                        total_horas={asistencia.total_horas}
                                        fecha_inicio={this.state.fchI}
                                        fecha_fin={this.state.fchF}
                                    />
                                ))) : // Si no hay registros
                                (<ListItemReportes
                                    key={123}
                                    nombre={"No se encontro "}
                                    apellidos={"ningun registro, "}
                                    fecha_inicio={"pruebe cambiando "}
                                    fecha_fin={"la fecha."}
                                />)
                            }
                        </div>
                        <div className="btnBox smallbtn">
                            <button style={{visibility: 'hidden'}}></button>
                            <button onClick={this.generatePDF} disabled={this.state.alumnos.length === 0} className="registerBack nomargin">Guardar registro PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ReportesPage;