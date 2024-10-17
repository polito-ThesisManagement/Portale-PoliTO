import React, { useContext } from "react";
import { FavoritesContext } from "../App";

import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Title from "../components/Title";
import CourseNotice from "../components/CourseNotice";
import GeneralNotice from "../components/GeneralNotice";
import InfoTooltip from '../components/InfoTooltip';
import CourseSummary from "../components/CourseSummary";
import WidgetCalendar from "../components/WidgetCalendar";

import Courses from '../data/Courses.json';
import CourseNotices from '../data/CourseNotices.json';
import GeneralNotices from '../data/GeneralNotices.json';

import '../styles/Text.css';
import '../styles/Utilities.css'

import { StarFill } from "react-bootstrap-icons";
import { FaHouse } from 'react-icons/fa6';
import { FaList } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';
import { FaClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            icon={<FaHouse size={28} style={{position:'relative', bottom:'2px'}} /> }
            sectionName='Homepage'
           />

            <Row>
                <Col md={12} lg={5}>
                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Carico didattico
                            </span>
                            <InfoTooltip text='Attraverso il carico didattico è possibile accedere alle pagine dei singoli corsi'/>
                        </div>
                        <ListGroup style={{borderRadius:'16px'}}>
                            {Courses.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome}
                                     periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <StarFill size={20} className='subsection-icon' style={{position:'relative', bottom:'2px'}}/>
                                Preferiti
                            </span>
                            <InfoTooltip text='I servizi selezionati come preferiti (attraverso icona ★) compariranno qui'/>
                        </div>
                        <Row>
                            {favorites.length > 0 ? favorites.map((fav, index) => {
                                return (
                                    <Col xs={6} key={index} className="mb-2">
                                            <OverlayTrigger
                                                delay={{ show: 250, hide: 0 }}
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
                            ) : <p className="mb-2 px-3" style={{fontFamily:'Montserrat, sans-serif'}}>Nessun servizio selezionato tra i preferiti</p>}
                        </Row>
                    </Container>
                </Col>
                
                <Col md={12} lg={7}>
                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <BsFillCalendarFill size={20} className='subsection-icon' style={{position:'relative', bottom:'1px'}} />
                                Agenda
                            </span>
                            <InfoTooltip text="Attraverso l'agenda è possibile visionare lezioni, appelli, scadenze e prenotazioni"/>
                        </div>
                        <WidgetCalendar/>
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection d-flex justify-content-between">
                            <span className="subsection-title">
                                <FaClipboard size={20} className='subsection-icon' style={{position:'relative', bottom:'2px'}} />
                                Avvisi recenti
                            </span>
                            <InfoTooltip text="Elenco degli avvisi pubblicati negli ultimi 7 giorni"/>
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