import { Button, Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { Translate, FileEarmarkRichtextFill, FlagFill, Globe, Flag } from "react-bootstrap-icons";

import '../../styles/Utilities.css';

/////////// IMPORTANTE /////////// 
//////// LE CARD IN ITALIANO E GLOBALE SONO LE STESSE DI LINGUA INGLESE, DA CAMBIARE, SOLO SCOPO ILLUSTRATIVO /////////

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
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Visualizza certificazioni</Card.Title>
                                            <Card.Text>
                                                Visualizza le certificazioni ottenute o di cui hai effetuato l'upload
                                            </Card.Text>
                                            <Button className="custom-button">Visualizza Certificazioni</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Effetua l'upload di una certificazione</Card.Title>
                                            <Card.Text>
                                                Effettua l'upload di una certificazione di lingua, può essere utilizzate per compilare il curriculum o ottenere il superamento di un esame
                                            </Card.Text>
                                            <Button className="custom-button">Upload certificazione</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="custom-accordion mt-2">
                        <Accordion.Header>
                            <FlagFill size={20} className='subsection-icon' />
                            Lingua inglese
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica Livello di preparazion inglese</Card.Title>
                                            <Card.Text>
                                                Verifica il tuo livello di prerazione tramite test: wrting, listening, reading, speaking
                                            </Card.Text>
                                            <Button className="custom-button">Accedi al test</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Ielts</Card.Title>
                                            <Card.Text>
                                                Preparati all'esame Ielts o iscriviti all'esame tramite il portale
                                            </Card.Text>
                                            <Button className="custom-button">Accedi a Ielts</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Cla</Card.Title>
                                            <Card.Text>
                                                Per ulteriori informazioni a proposito della lingua inglese contatta il Centro linguistico dell'ateneo
                                            </Card.Text>
                                            <Button className="custom-button">Contatta Cla</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="custom-accordion mt-2">
                        <Accordion.Header>
                            <Flag size={20} className='subsection-icon' />
                            Lingua italiana
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica livello di preparazione inglese</Card.Title>
                                            <Card.Text>
                                                Verifica il tuo livello di prerazione tramite test: writing, listening, reading, speaking
                                            </Card.Text>
                                            <Button className="custom-button">Accedi al test</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Ielts</Card.Title>
                                            <Card.Text>
                                                Preparati all'esame Ielts o iscriviti all'esame tramite il portale
                                            </Card.Text>
                                            <Button className="custom-button">Accedi a Ielts</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Cla</Card.Title>
                                            <Card.Text>
                                                Per ulteriori informazioni a proposito della lingua inglese contatta il Centro linguistico dell'ateneo
                                            </Card.Text>
                                            <Button className="custom-button">Contatta Cla</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="custom-accordion mt-2">
                        <Accordion.Header>
                            <Globe size={20} className='subsection-icon' />
                            Altre lingue
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica Livello di preparazion inglese</Card.Title>
                                            <Card.Text>
                                                Verifica il tuo livello di prerazione tramite test: wrting, listening, reading, speaking
                                            </Card.Text>
                                            <Button className="custom-button">Accedi al test</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Ielts</Card.Title>
                                            <Card.Text>
                                                Preparati all'esame Ielts o iscriviti all'esame tramite il portale
                                            </Card.Text>
                                            <Button className="custom-button">Accedi a Ielts</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Cla</Card.Title>
                                            <Card.Text>
                                                Per ulteriori informazioni a proposito della lingua inglese contatta il Centro linguistico dell'ateneo
                                            </Card.Text>
                                            <Button className="custom-button">Contatta Cla</Button>
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