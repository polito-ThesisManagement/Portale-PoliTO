import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { FileEarmarkRichtextFill, FlagFill, Globe, Flag } from "react-bootstrap-icons";

import '../../styles/Utilities.css';

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
                                                Visualizza le certificazioni ottenute o di cui hai effetuato l'upload precedentemente
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
                    <Accordion.Item eventKey="1" className="custom-accordion my-2">
                        <Accordion.Header>
                            <FlagFill size={20} className='subsection-icon' />
                            Lingua inglese
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica Livello di preparazione inglese</Card.Title>
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
                    <Accordion.Item eventKey="2" className="custom-accordion my-2">
                        <Accordion.Header>
                            <Flag size={20} className='subsection-icon' />
                            Lingua italiana
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica livello di preparazione italiano</Card.Title>
                                            <Card.Text>
                                                Verifica il tuo livello di prerazione tramite test: ascolto, lettura, scrittura, grammatica
                                            </Card.Text>
                                            <Button className="custom-button">Test Italiano</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>CELI</Card.Title>
                                            <Card.Text>
                                                Preparati all'esame CELI o iscriviti all'esame tramite il portale
                                            </Card.Text>
                                            <Button className="custom-button">CELI</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Cla</Card.Title>
                                            <Card.Text>
                                                Per ulteriori informazioni a proposito della lingua italiana contatta il Centro linguistico dell'ateneo
                                            </Card.Text>
                                            <Button className="custom-button">Contatta Cla</Button>
                                        </Card.Body>
                                    </Card>
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
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Verifica Livello di preparazione lingue</Card.Title>
                                            <Card.Text>
                                                Verifica il tuo livello di prerazione lingua: francese, spagnolo, tedesco, russo
                                            </Card.Text>
                                            <Button className="custom-button">Test Lingue</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Certificazioni</Card.Title>
                                            <Card.Text>
                                                Scopri le diverse certificazioni disponibili per le lingue
                                            </Card.Text>
                                            <Button className="custom-button">Certificazioni</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Cla</Card.Title>
                                            <Card.Text>
                                                Per ulteriori informazioni sullo studio delle lingue contatta il Centro linguistico dell'ateneo
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