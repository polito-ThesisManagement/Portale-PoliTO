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
                                            <Button className="custom-button">Visualizza certificazioni</Button>
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
                            <Col>
                                <Row className="mb-3 mx-1">
                                Questi test di livello per le lingue francese, portoghese, spagnolo e tedesco sono accessibili in qualsiasi momento. Sono eseguibili in modalità remota da tutti gli studenti del Politecnico di Torino. Se sei uno studente selezionato nell'ambito dei Bandi di Concorso per la mobilità ERASMUS+ ed Extra-UE/NON ERASMUS+ del Politecnico di Torino, ti invitiamo a leggere le istruzioni a questa pagina: https://didattica.polito.it/cla/it/corsi_studenti_mobilita_verso_estero (sezione Test di livello della conoscenza della lingua straniera).
                                </Row>
                                <Row>
                                    <Col>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Francese</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Spagnolo</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Tedesco</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <Card.Title className="mx-auto mb-3">Test di livello - Portoghese</Card.Title>
                                                <Button className="custom-button">Inizia la prova</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </>
    );

}