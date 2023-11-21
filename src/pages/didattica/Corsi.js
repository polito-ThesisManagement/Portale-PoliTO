import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Courses from '../../data/Courses.json'
import AltriCorsi from '../../data/AltriCorsi.json'
import MaterialeCondiviso from '../../data/MaterialeCondiviso.json'
import CourseSummary from '../../components/CourseSummary';


import { FaList } from 'react-icons/fa';
import { PiListPlusFill, PiVideoCameraFill } from 'react-icons/pi'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { ImFolderUpload } from 'react-icons/im'
import { X, CameraReels, PlusSquare } from 'react-bootstrap-icons';
import { FaArrowRight } from "react-icons/fa6";


export default function Corsi() {

    const recentVirtualClassroom = ['Informatica', 'Analisi Matematica II'];

    const [show, setShow] = useState(false);
    const [otherCourses, setOtherCourses] = useState([]);

    const handleCourseSelection = (course) => {
        const isSelected = otherCourses.some((selectedCourse) => selectedCourse.codice === course.codice);

        if (isSelected) {
            const updatedCourses = otherCourses.filter((selectedCourse) => selectedCourse.codice !== course.codice);
            setOtherCourses(updatedCourses);
        } else {
            setOtherCourses((prevCourses) => [...prevCourses, course]);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <Col xs={3}>Codice</Col>
                                <Col xs={5}>Nome</Col>
                                <Col xs={3} style={{ marginLeft: '10px' }}>Data</Col>

                            </Row>
                        </div>
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {Courses.map((val) => (
                                val.prenotatoEsame ? (
                                    <ListGroup.Item key={val.codice} className='summary' style={{ marginBottom: '8px' }}>
                                        <Container className='p-0'>
                                            <Row>
                                                <Col xs={3} className='course-detail p-0' style={{ marginLeft: '8px' }}>
                                                    {val.codice}
                                                </Col>
                                                <Col xs={5} className='course-detail p-0'>
                                                    <span className='truncated'>{val.nome}</span>
                                                </Col>
                                                <Col xs={3} className='p-0'>
                                                    {val.dataEsame}
                                                </Col>
                                                <Col className='p-0'>
                                                    <X size={24} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                ) : null
                            ))}
                        </ListGroup>

                        <div className="text-center mt-2 mb-2">
                            <Button className="custom-button mt-2">Prenotazione appelli</Button>
                        </div>
                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <PiVideoCameraFill size={20} className='subsection-icon' />
                                Virtual classroom recenti
                            </span>
                            <Row className='pt-2' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                                <Col xs={5}>Corso</Col>
                                <Col xs={3} style={{position: 'relative', left: 74}}>Data</Col>
                                <Col></Col>
                            </Row>
                        </div>

                        <ListGroup style={{ borderRadius: '16px' }}>
                            {recentVirtualClassroom.map((rec, index) => (
                                <ListGroup.Item key={index} className='summary' style={{ marginBottom: '8px' }}>
                                    <Container className='p-0'>
                                        <Row>
                                            <Col xs={5}className='course-detail truncated p-0' style={{ marginLeft: '8px' }}>
                                                {rec}
                                            </Col>
                                            <Col xs={3} className='detail text-center p-0'>
                                                10/05/2022
                                            </Col>
                                            <Col xs={2} className='p-0'>
                                            </Col>
                                            <Col className='p-0 text-center'>
                                                <CameraReels size={20} style={{marginTop:'-8px'}}/>
                                                <FaArrowRight size={20} style={{marginTop:'-6px', marginLeft:'5px'}}/>
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
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {otherCourses.map((course) => {
                                return (
                                    <ListGroup.Item className='summary mb-2' key={course.codice}>
                                        <Container className='p-0'>
                                            <Row>
                                                <Col xs={3} className='course-detail'>
                                                    {course.codice}
                                                </Col>
                                                <Col xs={5} className='course-detail pe-2'>
                                                    <Link
                                                        //to={`/didattica/${props.nome}/materiale`}
                                                        //state={{ codice, nome, periodo, crediti, linkGuida }}
                                                        className='truncated-link'
                                                    >
                                                        {course.nome}
                                                    </Link>
                                                </Col>
                                               <Col xs={4} className='detail px-0'>
                                                {course.docente}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                        <div className="text-center mt-2 mb-2">
                            <Button className="custom-button mt-2" onClick={handleShow}>
                                Ricerca nel materiale condiviso <PlusSquare size={20} style={{marginLeft:'4px', marginTop:'-4px'}} />
                            </Button>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className='text-style'>Aggiungi corsi</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={`text-style modal-body-scrollable`}>
                                <h6>Seleziona il materiale condiviso dai docenti</h6>
                                <Row className='pt-2' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                                    <Col style={{ marginLeft: '8px' }}>Codice</Col>
                                    <Col>Nome</Col>
                                    <Col>Docente</Col>
                                </Row>
                                <ListGroup className='mt-2 p-0'>
                                    {MaterialeCondiviso.map((corso) => {
                                        return (
                                            <ListGroup.Item key={corso.codice}
                                                className={`summary mb-2 ${otherCourses.includes(corso) ? 'selected' : ''}`}
                                                style={{ borderRadius: '16px' }}
                                                onClick={() => handleCourseSelection(corso)}>
                                                <Container >
                                                    <Row>
                                                        <Col className='course-detail'>
                                                            {corso.codice}
                                                        </Col>
                                                        <Col className='course-detail'>
                                                            {corso.nome}
                                                        </Col>
                                                        <Col className='course-detail'>
                                                            {corso.docente}
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </ListGroup.Item>
                                        )

                                    })}
                                </ListGroup>

                            </Modal.Body>
                        </Modal>

                    </Container>
                </Col>
            </Row >
        </>
    );

}