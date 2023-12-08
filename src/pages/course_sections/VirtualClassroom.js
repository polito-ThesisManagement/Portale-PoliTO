import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { CameraVideoFill } from 'react-bootstrap-icons';

export default function VirtualClassroom() {

    return (
        <>
            <Container className="custom-container m-0">
                <Row className='mb-1 mx-2'>
                    <Alert key='warning' variant='warning' className='my-3'>
                        <h6 className='text-style' style={{ fontSize: '12px' }}>
                            Ti segnaliamo che le video-lezioni di ogni singolo corso sono visibili ai soli studenti iscritti al corso e a cui puoi accedere solo con le credenziali istituzionali. Ti informiamo che qualora la lezione sia registrata la tua webcam e il tuo microfono sono disabilitati e solo nel caso in cui tu decida di porre delle domande nel corso della lezione e/o intervenire a seguito di richiesta del docente, darai il consenso, affinche la tua immagine e la tua voce siano oggetto di registrazione. L'informativa completa sul trattamento dei
                            dati personali operato dal Politecnico di Torino e disponibile al seguente link: https://didattica.polito.it/privacy/
                        </h6>
                    </Alert>
                </Row>
                <Row>
                    <Col xs={12} sm={3} className='mb-2'>
                        <Container className='file-container'>
                            <ListGroup>
                                <ListGroupItem className='file-element mt-1'>
                                    <span className='ms-2' style={{ fontWeight: 'bold' }}>Registrazioni del corso</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                <CameraVideoFill size={25} />
                                    <span className='ms-2'>introduzione al corso</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                <CameraVideoFill size={25} />
                                    <span className='ms-2'>fondamenti del corso</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                <CameraVideoFill size={25} />
                                    <span className='ms-2'>lezione 27/11/2023 - I</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                <CameraVideoFill size={25} />
                                    <span className='ms-2'>lezione 27//11/2023 - II</span>
                                </ListGroupItem>
                            </ListGroup>

                        </Container>
                    </Col>
                    <Col className='mb-2' xs={12} sm={9}>
                        <Container className='file-container'>
                            <div className='pt-3 px-3'>
                                <div className='mt-1' style={{ fontSize: '15px' }}>Introduzione al corso</div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );

}