import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import CourseSummary from "../components/CourseSummary";

import Courses from '../Courses.json'

export default function Home() {

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h2>Carico Didattico</h2>
                    <div className="mx-2">
                        <h4>I miei corsi</h4>
                        <ListGroup className="me-2">
                            {Courses.map((corso) => {
                                return (
                                    <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                                )
                            })}
                        </ListGroup>
                    </div>
                </Row>
                <Row className="mt-2">
                    <Col><Button variant="primary" as={Link} to="/orario">Orario Lezioni</Button></Col>
                    <Col><Button variant="primary" as={Link} to="/esami" disabled>Esami</Button></Col>
                    <Col><Button variant="primary" as={Link} to="/libretto" disabled>Libretto</Button></Col>
                </Row>
            </Container>
        </>
    );  

}