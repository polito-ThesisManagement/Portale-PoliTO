import React from 'react';

import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Courses from '../../data/Courses.json'
import AltriCorsi from '../../data/AltriCorsi.json'
import CourseSummary from '../../components/CourseSummary';
import InfoTooltip from '../../components/InfoTooltip';

import recentVirtualClassroom from '../../data/RegistrazioniRecenti.json';


import { FaList } from 'react-icons/fa';
import { PiListPlusFill, PiVideoCameraFill } from 'react-icons/pi'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { ImFolderUpload } from 'react-icons/im'
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


export default function Corsi() {

    return (
        <>
            <Row>
                <Col md={12} lg={6}>
                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Carico didattico
                            </span>
                            <InfoTooltip text='Attraverso il carico didattico è possibile accedere alle pagine dei singoli corsi'/>
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
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <PiListPlusFill size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Altri corsi
                            </span>
                            <InfoTooltip text="Servizio che permette l'accesso alle pagine del corsi non presenti all'interno del carico didattico, mediante permesso straordinario"/>
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
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <BsCalendarCheckFill size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Appelli prenotati
                            </span>
                            <InfoTooltip text="Visualizzazione e gestione prenotazioni agli appelli d'esame disponibili"/>
                            {/*<Row className='pt-2' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}}>
                                <Col xs={3}>Codice</Col>
                                <Col xs={5}>Nome</Col>
                                <Col xs={3} style={{ marginLeft: '10px' }}>Data</Col>

                            </Row>*/}
                        </div>
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {Courses.map((val) => (
                                val.prenotatoEsame ? (
                                    <ListGroup.Item key={val.codice} className='summary-static' style={{ marginBottom: '8px' }}>
                                        <Container className='p-0'>
                                            <Row>
                                                <Col xs={4} sm={3} className='course-detail ps-2'>
                                                    {val.codice}
                                                </Col>
                                                <Col xs={8} sm={5} className='course-detail ps-4'>
                                                    <span className='truncated'>{val.nome}</span>
                                                </Col>
                                                <Col xs={10} sm={3} className='' style={{ position:'relative', top:'1px', left:'-4px'}}>
                                                    {val.dataEsame}
                                                </Col>
                                                <Col className='p-0'/>
                                                <Col className='zooming-icon p-0' style={{position:'relative', left:'-8px', bottom:'1px', cursor:'pointer'}}>
                                                    <IoClose size={20} style={{ strokeWidth: '10', position:'relative', top:'1px' }} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                ) : null
                            ))}
                        </ListGroup>

                        <div className="text-center my-2">
                            <Button className="custom-button mt-2 btn-sm" style={{height:'auto'}} >Prenotazione appelli</Button>
                        </div>
                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <PiVideoCameraFill size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Virtual classroom recenti
                            </span>
                            <InfoTooltip text='Elenco che permette di accedere alle virtual classroom recenti, registrate dai docenti'/>
                        </div>

                        <ListGroup style={{ borderRadius: '16px' }}>
                            {recentVirtualClassroom.map((rec) => (
                                <ListGroup.Item key={rec.corso +" "+rec.data} className='summary' style={{ marginBottom: '8px', cursor:'pointer' }}>
                                    <Container className='p-0'>
                                        <Row>
                                            <Col xs={12} sm={8}className='course-detail truncated ps-2' >
                                                {rec.corso}
                                            </Col>
                                            <Col xs= {10}sm={3} className='detail ps-2' style={{ position:'relative', top:'1px'}}>
                                                {rec.data}
                                            </Col>
                                            <Col className='p-0'>
                                            </Col>
                                            <Col className='p-0' style={{position:'relative', left:'-8px'}}>
                                                <FaArrowRight className='p-0' size={20}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                                <span className="subsection-title">
                                    <ImFolderUpload size={20} className='subsection-icon' style={{ position: 'relative', bottom: '2px' }} />
                                    Materiale condiviso 
                                </span>
                                <InfoTooltip text='Questo servizio permette di accedere al materiale pubblicato dai docenti, reso disponibile a tutti gli studenti'/>
                        </div>
                        <p className="mb-2 px-2" style={{fontFamily:'Montserrat, sans-serif'}}>Nessun materiale didattico selezionato. È possibile aggiungere nuovo materiale a questa sezione, cercandolo tra quello condiviso pubblicamente attraverso "Ricerca nel materiale condiviso".</p>
                        <div className="text-center my-2">
                            
                            <Button className="custom-button mt-2 btn-sm" style={{height:'auto'}}>
                                Ricerca nel materiale condiviso
                            </Button>
                        </div>

                    </Container>
                </Col>
            </Row >
        </>
    );

}