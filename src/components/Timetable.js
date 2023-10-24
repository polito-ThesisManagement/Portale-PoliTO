import Courses from '../Courses.json'

import Table from 'react-bootstrap/Table';

import '../App.css'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const giorniSettimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];
const orari = ['8:30', '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

export default function Timetable() {
    return (
        <Container className='my-5'>
            <Table responsive striped size='md' borderless>
                <thead>
                    <tr>
                        <th></th>
                        {giorniSettimana.map((giorno) => {
                            return (<th style={{backgroundColor : '#03577A', color: '#fff', textAlign: 'center', width: '50px'}} key={giorno}>{giorno}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {orari.map((orario, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ width: '5%', height: '70px', backgroundColor: '#FFC300', color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                                    {orario}
                                </td>
                                {giorniSettimana.map((giorno, indice) => {
                                    const filteredCourses = Courses.filter((corso) => {
                                        return (
                                            corso.orarioSettimanale.some(obj =>
                                                obj.giorno === giorniSettimana[indice] && obj.orario.substring(0, 5).includes(orario))
                                            //corso.orarioSettimanale.giorno === giorniSettimana[indice] 
                                            //aggiungi parte filtri
                                        );
                                    });
                                    return (
                                        <td key={indice} style={{border: '2px ridge'}}>
                                            <Container style={{display: 'flex', position: 'relative'}}>
                                                    {filteredCourses.map((corso, courseIndex) => (
                                                        <Col md={2 /* si puù aumentare numero corso sovrapponibili */} key={courseIndex}
                                                        className='col-6'>
                                                            <div
                                                                key={courseIndex}
                                                                className={`course-bar bg-${corso.colore}`}
                                                                title={`${corso.nome} ${corso.docente}`}
                                                            ></div>
                                                        </Col>
                                                    ))}
                                            </Container>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}