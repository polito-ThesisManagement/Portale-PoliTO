import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { FileEarmarkRichtextFill, FlagFill, Globe, Flag } from "react-bootstrap-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

import '../../styles/Utilities.css';
import { Link } from "react-router-dom";

export default function Lingue() {

    return (
        <>
            
                <Accordion className="mt-2">
                    <Accordion.Item eventKey="0" className="custom-accordion">
                        <Accordion.Header>
                            <FileEarmarkRichtextFill size={20} className='subsection-icon' />
                            Certificazioni di lingua
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="custom-accordion my-2">
                        <Accordion.Header>
                            <FlagFill size={20} className='subsection-icon' />
                            Lingua inglese
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row className="mb-3 mx-1">
                                <div className="px-0" style={{ display: 'flex', alignItems: 'center' }}>    
                                    <Link className="custom-link truncated" target='_blank' to='https://didattica.polito.it/clapdf/it-vlaib-sito.pdf'>
                                    Verifica il tuo livello di conoscenza attuale tramite vLAIB&nbsp;
                                    <FaExternalLinkAlt style={{position:'relative', bottom:'2px'}}/>
                                    </Link>
                                    
                                </div>
                                <div className="px-0"  style={{ display: 'flex', alignItems: 'center' }}>    
                                    <Link className="custom-link truncated" target='_blank' to='https://didattica.polito.it/cla/it/esame_ielts_poli'>
                                    Ulteriori informazioni - sito CLA&nbsp;
                                    <FaExternalLinkAlt style={{position:'relative', bottom:'2px'}}/>
                                    </Link>
                                    
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Preparazione all'IELTS</Card.Title>
                                            <Card.Text>
                                            </Card.Text>
                                            <Button className="custom-button">Accedi al test</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Esito esame IELTS</Card.Title>
                                            <Card.Text>
                                            </Card.Text>
                                            <Button className="custom-button">Accedi al test</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="custom-accordion my-2">
                        <Accordion.Header>
                            <Flag size={20} className='subsection-icon' />
                            Lingua italiana
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="custom-accordion my-2">
                        <Accordion.Header>
                            <Globe size={20} className='subsection-icon' />
                            Altre lingue
                        </Accordion.Header>
                        <Accordion.Body>
                                <div className="mb-3 mx-1" style={{ display: 'inline-block' }}> 
                                Questi test di livello per le lingue francese, portoghese, spagnolo e tedesco sono accessibili in qualsiasi momento. Sono eseguibili in modalità remota da tutti gli studenti del Politecnico di Torino. Se sei uno studente selezionato nell'ambito dei Bandi di Concorso per la mobilità ERASMUS+ ed Extra-UE/NON ERASMUS+ del Politecnico di Torino, ti invitiamo a leggere le istruzioni a&nbsp;
                                    <Link className="custom-link" target='_blank' to='https://didattica.polito.it/cla/it/corsi_studenti_mobilita_verso_estero'>
                                        questa pagina&nbsp;
                                        <FaExternalLinkAlt style={{position:'relative', bottom:'2px'}}/>
                                    </Link>
                                    
                                    &nbsp;(sezione test di livello della conoscenza della lingua straniera).
                                </div>
                                <Row>
                                    <Col sm={6} lg={3}>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Francese</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Spagnolo</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Tedesco</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Portoghese</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </>
    );

}