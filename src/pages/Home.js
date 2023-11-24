import React, { useContext } from "react";
import { FavoritesContext } from "../App";

import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

import CourseSummary from "../components/CourseSummary";
import WidgetCalendar from "../components/WidgetCalendar";
import { BellFill, StarFill } from "react-bootstrap-icons";


import Courses from '../data/Courses.json';
import CourseNotices from '../data/CourseNotices.json';
import GeneralNotices from '../data/GeneralNotices.json'

import '../styles/Text.css';
import '../styles/Utilities.css'
import { HiHome } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Title from "../components/Title";
import CourseNotice from "../components/CourseNotice";
import GeneralNotice from "../components/GeneralNotice";

export default function Home() {
    const { favorites } = useContext(FavoritesContext);

    const renderTooltip = (service) => (
        <Tooltip id="button-tooltip">
          {service}
        </Tooltip>
      );

    return (
        <>
           <Title
            icon={<HiHome size={28} />}
            sectionName='Homepage'
           />

            <Row>
                <Col md={12} lg={5}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' />
                                Carico didattico
                            </span>
                        </div>
                        <ListGroup style={{borderRadius:'16px'}}>
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
                                    <Col xs={6} key={index} className="mb-2">
                                            <OverlayTrigger
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(JSON.parse(fav).service)}>
                                                <Button 
                                                className="custom-pill-button truncated w-100" 
                                                as={Link} to={JSON.parse(fav).path}>
                                                    {JSON.parse(fav).service}
                                                </Button>
                                            </OverlayTrigger>
                                    </Col>
                                )
                            }
                            ) : <p>Non hai ancora aggiunto preferiti</p>}
                        </Row>
                    </Container>
                </Col>
                <Col md={12} lg={7}>
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
                                Avvisi recenti
                            </span>
                        </div>
                        <Tabs
                            defaultActiveKey="generali"
                            transition={false}
                            id="tab-avvisi"
                            className="mb-2 custom-tab"
                        >
                            <Tab eventKey="generali" title="Avvisi generali">
                                {GeneralNotices.map((notice) => {
                                    return (
                                        <GeneralNotice  key={notice.data+" "+notice.title} data={notice.data} sender={notice.sender} title={notice.title} body={notice.body}  />
                                    )
                                })}
                            </Tab>
                            <Tab eventKey="corsi" title="Avvisi corsi">
                                {CourseNotices.map((notice) => {
                                    return (
                                        <CourseNotice key={notice.data+" "+notice.title} data={notice.data} course={notice.course} sender={notice.sender} title={notice.title} body={notice.body}  />
                                    )
                                })}
                            </Tab>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
        </>
    );

}