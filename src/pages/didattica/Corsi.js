import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Courses from '../../data/Courses.json'
import AltriCorsi from '../../data/AltriCorsi.json'
import CourseSummary from '../../components/CourseSummary';

import { FaList } from 'react-icons/fa';
import { PiListPlusFill, PiVideoCameraFill } from 'react-icons/pi'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { ImFolderUpload } from 'react-icons/im'
import { X, CameraReels } from 'react-bootstrap-icons';


export default function Corsi() {
    const recentVirtualClassroom = ['Informatica', 'Analisi Matematica II'];
    return (
        <>
            <Row>
                <Col md={12} lg={6}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' />
                                Carico didattico
                            </span>
                        </div>
                        <ListGroup style={{ borderRadius: '16px' }}>
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
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {AltriCorsi.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </Container>
                </Col>
                <Col md={12} lg={6}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <BsCalendarCheckFill size={20} className='subsection-icon' />
                                Appelli prenotati
                            </span>
                            <Row className='pt-2' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                                <Col xs={2}>Codice</Col>
                                <Col xs={3}>Nome</Col>
                                <Col xs={4} style={{ marginLeft: '40px' }}>Data Esame</Col>
                                <Col>Annulla</Col>
                            </Row>
                        </div>
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {Courses.map((val) => (
                                val.prenotatoEsame ? (
                                    <ListGroup.Item key={val.codice} className='summary' style={{ marginBottom: '8px' }}>
                                        <Container className='p-0'>
                                            <Row>
                                                <Col xs={2} className='course-detail p-0' style={{ marginLeft: '8px' }}>
                                                    {val.codice}
                                                </Col>
                                                <Col xs={4} className='course-detail p-0'>
                                                    {val.nome}
                                                </Col>
                                                <Col xs={4} className='p-0'>
                                                    {val.dataEsame}
                                                </Col>
                                                <Col>
                                                    <X size={28} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                ) : null
                            ))}
                        </ListGroup>

                        <div className="text-center mt-2 mb-2">
                            <Button className="custom-button mt-2">Prenotazione Esami</Button>
                        </div>
                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <PiVideoCameraFill size={20} className='subsection-icon' />
                                Virtual classroom recenti
                            </span>
                            <Row className='pt-2' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                                <Col >Nome</Col>
                                <Col style={{marginLeft: '50px'}}>Data Pubblicazione</Col>
                                <Col style={{marginLeft: '12px'}}>Vai a videolezione</Col>
                            </Row>
                        </div>

                        <ListGroup style={{ borderRadius: '16px' }}>
                            {recentVirtualClassroom.map((rec, index) => (
                                <ListGroup.Item key={index} className='summary-video' style={{ marginBottom: '8px' }}>
                                    <Container className='p-0'>
                                        <Row>
                                            <Col className='course-detail p-0' style={{ marginLeft: '8px' }}>
                                                {rec}
                                            </Col>
                                            <Col className='course-detail p-0 text-center'>
                                                10/05/2022
                                            </Col>
                                            <Col className='p-0 text-center'>
                                                <CameraReels size={20} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

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
            </Row >
        </>
    );

}