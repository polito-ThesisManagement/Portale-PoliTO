import Button from 'react-bootstrap/Button';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CourseSummary from "../components/CourseSummary";

import {ClockFill, BellFill, StarFill } from "react-bootstrap-icons";

import Courses from '../data/Courses.json'

import '../styles/App.css';
import '../styles/Text.css';
import '../styles/Utilities.css'
import { HiHome } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';

export default function Home() {

    return (
        <>
            <div className="title">
                <HiHome size={28} />
                <span className="section-title" style={{marginLeft:'5px', marginTop:'3px'}}>Homepage</span>
            </div>
                
                <Row>   
                    <Col sm={4}>
                        <Container className='custom-container'>
                            <div className="subsection">
                                <span className="subsection-title">
                                    <FaList size={20} className='subsection-icon'/>
                                    Carico didattico
                                </span>
                            </div>
                            <ListGroup className="mt-2">
                                {Courses.map((corso) => {
                                    return (
                                        <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                    )
                                })}
                            </ListGroup>
                        </Container>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Container className='custom-container'>
                                <Row>
                                    <div className="subsection">
                                        <span className="subsection-title">
                                            <StarFill size={20} className='subsection-icon' style={{marginLeft:'11px', marginBottom:'5px'}}/>
                                            Preferiti
                                        </span>
                                    </div>
                                </Row>
                            </Container>
                        </Row>
                        <Row className='mt-3'>
                            <Container className='custom-container'>
                                <div className="subsection">
                                    <span className="subsection-title">
                                        <BellFill size={20} className='subsection-icon'/>
                                        Avvisi
                                    </span>
                                </div>
                                <Tabs
                                    defaultActiveKey="generali"
                                    transition={false}
                                    id="tab-avvisi"
                                    className="mb-2 tab"
                                >
                                    <Tab eventKey="generali" title="Avvisi generali">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    </Tab>
                                    <Tab eventKey="corsi" title="Avvisi corsi">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    </Tab>
                                </Tabs>
                            </Container>
                            
                        </Row>    
                    </Col>
                    <Col sm={4}>
                        <Container className='custom-container'>
                            <div className="subsection">
                                <span className="subsection-title">
                                    <BsFillCalendarFill size={20} className='subsection-icon' style={{marginBottom:'3px'}}/>
                                    Agenda
                                </span>
                            </div>
                            
                        </Container>
                    </Col>
                </Row>
        </>
    );

}