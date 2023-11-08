import Button from 'react-bootstrap/Button';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CourseSummary from "../components/CourseSummary";

import { ListTask, ClockFill, BellFill, StarFill, JournalBookmarkFill, HouseFill } from "react-bootstrap-icons";

import Courses from '../data/Courses.json'

import '../styles/App.css';
import '../styles/Text.css'
import { HiHome } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';

export default function Home() {

    return (
        <>
            <div className="d-flex align-items-center mx-2 mt-3">
                <HiHome size={28} />
                <span className="section-title" style={{marginLeft:'5px', marginTop:'3px'}}>Homepage</span>
            </div>
            <Container className="mt-3">
                <Row>
                    <Col>
                            <div className="d-flex align-items-center">
                                <FaList size={20}/>
                                <span className="subsection-title" style={{marginLeft:'10px'}}>Carico Didattico</span>
                            </div>
                            <div className="text-center">
                                <Button className='custom-button' >
                                    <ClockFill className="me-2" />
                                    Orario lezioni
                                </Button>
                            </div>
                            <ListGroup className="mt-2">
                                {Courses.map((corso) => {
                                    return (
                                        <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                    )
                                })}
                            </ListGroup>
                    </Col>
                    <Col>
                        {/** Si può provare con un container quì */}
                        <Row style={{ height: '50vm' }}>
                            <div className="d-flex align-items-center mb-2">
                                <BellFill className="me-1 pb-2" size={30} />
                                <h4 className="text-style">Avvisi</h4>
                            </div>
                            <Tabs
                                defaultActiveKey="generali"
                                transition={false}
                                id="tab-avvisi"
                                className="mb-3"
                            >
                                <Tab eventKey="generali" title="Avvisi Generali">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                </Tab>
                                <Tab eventKey="corsi" title="Avvisi Corsi">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                </Tab>
                            </Tabs>
                        </Row>
                        <Row className="mt-3">
                            <div className="d-flex align-items-center mb-2">
                                <StarFill className="me-1 pb-2" size={30} />
                                <h4 className="text-style">Preferiti</h4>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center mb-2">
                            <JournalBookmarkFill className="me-1 pb-2" size={30} />
                            <h4 className="text-style">Agenda</h4>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );

}