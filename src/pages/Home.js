import React, { useContext } from "react";
import { FavoritesContext } from "../App";

import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import CourseSummary from "../components/CourseSummary";
import WidgetCalendar from "../components/WidgetCalendar";
import { BellFill, StarFill } from "react-bootstrap-icons";

import Courses from '../data/Courses.json'

import '../styles/App.css';
import '../styles/Text.css';
import '../styles/Utilities.css'
import { HiHome } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';

export default function Home() {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const renderTooltip = (service) => (
        <Tooltip id="button-tooltip">
          {service}
        </Tooltip>
      );

    return (
        <>
            <div className="title">
                <HiHome size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Homepage</span>
            </div>

            <Row>
                <Col sm={5}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' />
                                Carico didattico
                            </span>
                        </div>
                        <ListGroup>
                            {Courses.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <StarFill size={20} className='subsection-icon' style={{ marginBottom: '5px' }} />
                                Preferiti
                            </span>
                        </div>
                        <Row>
                            {favorites ? favorites.map((fav, index) => {
                                return (
                                    <Col lg={4} className="mb-2">
                                        <ListGroup>
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(fav)}>
                                                <ListGroup.Item key={index} className="me-5" style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '40px' }}>
                                                    {fav}
                                                </ListGroup.Item>
                                            </OverlayTrigger>
                                        </ListGroup>
                                    </Col>
                                )
                            }
                            ) : <p>Non hai ancora aggiunto preferiti</p>}
                        </Row>
                    </Container>
                </Col>
                <Col sm={7}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <BsFillCalendarFill size={20} className='subsection-icon' style={{ marginBottom: '3px' }} />
                                Agenda
                            </span>
                            <WidgetCalendar />
                        </div>

                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <BellFill size={20} className='subsection-icon' />
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
                </Col>
            </Row>
        </>
    );

}