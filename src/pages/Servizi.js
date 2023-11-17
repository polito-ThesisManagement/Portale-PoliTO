import { Container, Row, Col } from "react-bootstrap";
import { MdApps, MdMapsHomeWork } from 'react-icons/md'
import { Link45deg, CaretRightFill } from "react-bootstrap-icons";

import { ListGroup } from "react-bootstrap";
import Title from "../components/Title";

import '../styles/Utilities.css'
import LinkUtili from "../data/LinkUtili.json";

import { Link } from "react-router-dom";


export default function Servizi() {
    return (
        <>
            <Title
                icon={<MdApps size={28} />}
                sectionName='Servizi'
            />
            <Row>
                <Col md={12} lg={9}>
                    <Container className="custom-container">
                        <div className="subsection">
                            <span className="subsection-title">
                                <MdMapsHomeWork size={20} className='subsection-icon' />
                                Aule libere
                            </span>
                        </div>
                    </Container>
                </Col>
                <Col md={12} lg={3}>
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
                                    <ListGroup.Item key={link.servizio} className='px-1'style={{border: "hidden"}} >
                                        <Link to={link.link}
                                            target='_blank'
                                            style={{color: "#000000"}}>
                                                <CaretRightFill className='me-1' style={{marginBottom:'2px'}} />
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