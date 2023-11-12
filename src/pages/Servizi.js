import { Container, Row, Col } from "react-bootstrap";
import { MdApps, MdMapsHomeWork } from 'react-icons/md'
import { Link45deg, CaretRightFill } from "react-bootstrap-icons";

import { ListGroup } from "react-bootstrap";


import '../styles/Utilities.css'
import LinkUtili from "../data/LinkUtili.json";

import { Link } from "react-router-dom";


export default function Servizi() {
    return (
        <>
            <div className="title">
                <MdApps size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Servizi</span>
            </div>
            <Row>
                <Col>
                    <Container className="custom-container">
                        <div className="subsection">
                            <span className="subsection-title">
                                <MdMapsHomeWork size={20} className='subsection-icon' />
                                Aule libere
                            </span>
                        </div>
                    </Container>
                </Col>
                <Col md={3}>
                    <Container className="custom-container">
                        <div className="subsection">
                            <span className="subsection-title">
                                <Link45deg size={20} className='subsection-icon' />
                                Link utili
                            </span>
                        </div>
                        <ListGroup>
                            {LinkUtili.map(link => {
                                return (
                                    <ListGroup.Item key={link.servizio} style={{border: "hidden"}} >
                                        <Link to={link.link}
                                            target='_blank'
                                            style={{color: "#000000"}}>
                                                <CaretRightFill className='me-1' />
                                                {link.servizio}
                                        </Link>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Container>
                </Col>
            </Row>
        </>
    );

}