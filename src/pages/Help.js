import React from "react";

import '../styles/Utilities.css'

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { InfoCircleFill, TicketDetailedFill, Journals, CaretRightFill, TicketPerforatedFill } from 'react-bootstrap-icons';

import Guide from "../data/Guide.json";

import { Link } from "react-router-dom";


export default function Help() {
    const categories = [
        "Accesso corsi di studio (Laurea e Laurea Magistrale)",
        "Esame di stato per l'abilitazione professionale",
        "Honours School",
        "La formazione linguistica",
        "Master e formazione permanente",
        "Mobilità in entrata",
        "Mobilità verso l'estero",
        "Norme e carriera studenti",
        "Scuola di dottorato",
        "Sistemi informativi",
        "Special Needs",
        "Tasse e agevolazioni economiche",
        "Tirocini e carrer services",
        "Varie ed eventi"
    ];

    return (
        <>
            <div className="title">
                <InfoCircleFill size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Help</span>
            </div>

            <Row>
                <Col md={12} lg={9}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <TicketDetailedFill size={20} className='subsection-icon' />
                                Ticket
                            </span>
                        </div>
                        <ListGroup style={{borderRadius:'16px'}}>
                            {categories.map((cat) => {
                                return (
                                    <ListGroup.Item
                                        key={cat}
                                        className="summary"
                                        style={{ marginBottom: '5px', width: '50%' }}>{cat}
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Container>
                </Col>
                <Col md={12} lg={3}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <Journals size={20} className='subsection-icon' />
                                Guide
                            </span>
                        </div>
                        <ListGroup>
                            {Guide.map(guida => {
                                return (
                                    <ListGroup.Item key={guida.guida} className="px-1" style={{ border: "hidden" }} >
                                        <Link to={guida.link}
                                            target='_blank'
                                            className="mb-auto"
                                            style={{ color: "#000000" }}>
                                            <CaretRightFill className='me-1' style={{marginBottom:'2px'}} />
                                            {guida.guida}</Link>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <TicketPerforatedFill size={20} className='subsection-icon' />
                                I tuoi ticket
                            </span>
                        </div>
                        <ListGroup style={{borderRadius:'16px'}}>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '5px' }}>
                                    Oggetto ticket 1 <br></br> - Chiuso
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '5px' }}>
                                    Oggetto ticket 2 <br></br> 
                                    - Chiuso
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '5px' }}>
                                    Oggetto ticket 3 <br></br>
                                    - Aperto
                            </ListGroup.Item>

                        </ListGroup>
                        <div className="text-center">
                        <Button className="custom-button mt-2">Consulta tutti i tuoi ticket</Button>
                        </div>
                    </Container>
                </Col>
            </Row>

        </>
    );

}