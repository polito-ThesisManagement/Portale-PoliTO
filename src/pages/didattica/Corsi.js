import { Row, Col, Container, ListGroup } from 'react-bootstrap';

import Courses from '../../data/Courses.json'
import AltriCorsi from '../../data/AltriCorsi.json'
import CourseSummary from '../../components/CourseSummary';

import { FaList } from 'react-icons/fa';
import { PiListPlusFill, PiVideoCameraFill } from 'react-icons/pi'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { ImFolderUpload } from 'react-icons/im'

export default function Corsi() {
    //occhio alla navigazione dentro i corsi, per il momento in altri e in carico didattico ci sono gli stessi corsi
    return (
        <>
            <Row>   
                <Col sm={6}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' />
                                Carico didattico
                            </span>
                        </div>
                        <ListGroup>
                            {Courses.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </Container>
                    <Container className='custom-container'>
                    <div className="subsection">
                            <span className="subsection-title">
                                <PiListPlusFill size={20} className='subsection-icon' />
                                Altri corsi
                            </span>
                        </div>
                        <ListGroup>
                            {AltriCorsi.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </Container>
                </Col> 
                <Col sm={6}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <BsCalendarCheckFill size={20} className='subsection-icon' />
                                Appelli prenotati
                            </span>
                        </div>
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <PiVideoCameraFill size={20} className='subsection-icon' />
                                Virtual classroom recenti
                            </span>
                        </div>
                        
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <ImFolderUpload size={20} className='subsection-icon' />
                                Materiale condiviso
                            </span>
                        </div>
                        
                    </Container>
                </Col>                 
            </Row>
        </>
    );  

}