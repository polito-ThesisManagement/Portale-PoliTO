import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CourseSummary from "../components/CourseSummary";

import { ListTask, ClockFill, BellFill, StarFill, JournalBookmarkFill, HouseFill } from "react-bootstrap-icons";

import Courses from '../data/Courses.json'

export default function Home() {

    return (
        <>
            <div className="d-flex align-items-center mb-2 mt-3">
                <HouseFill className="me-1 pb-2" size={30} />
                <h1 style={{ fontFamily: 'Montserrat' }}>Homepage</h1>
            </div>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <div className="mx-2">
                            <div className="d-flex align-items-center mb-2">
                                <ListTask className="me-2 pb-2" size={30} />
                                <h4 style={{ fontFamily: 'Montserrat' }}>Carico Didattico</h4>
                            </div>
                            <div className="text-center">
                                <Button style={{ backgroundColor: '#002B48' }} >
                                    <ClockFill className="me-2" />
                                    Orario Lezioni
                                </Button>
                            </div>
                            <ListGroup className="mt-2">
                                {Courses.map((corso) => {
                                    return (
                                        <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                    )
                                })}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        {/** Si può provare con un container quì */}
                        <Row style={{ height: '50vm' }}>
                            <div className="d-flex align-items-center mb-2">
                                <BellFill className="me-1 pb-2" size={30} />
                                <h4 style={{ fontFamily: 'Montserrat' }}>Avvisi</h4>
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
                                <h4 style={{ fontFamily: 'Montserrat' }}>Preferiti</h4>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center mb-2">
                            <JournalBookmarkFill className="me-1 pb-2" size={30} />
                            <h4 style={{ fontFamily: 'Montserrat' }}>Agenda</h4>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );

}