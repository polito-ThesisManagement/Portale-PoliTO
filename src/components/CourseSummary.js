import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell, ClockFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


export default function CourseSummary(props) {

    const { codice, nome, periodo, crediti } = props;

    //si possono rivedere i colori
    return (
        <ListGroup.Item className='mb-2 rounded' style={{backgroundColor: '#004C81', color: '#FFFFFF', font: 'semi-bold'}}>
            <Container>
                <Row>
                    <Col xs={2}>
                        {props.codice}
                    </Col>
                    <Col xs={7}>
                        <Link
                         to={`/didattica/${props.nome}`}
                          state={{codice, nome, periodo, crediti}}
                          style={{color: '#FFFFFF', font: 'bold'}} >{props.nome}</Link>
                    </Col>
                    <Col>
                        {props.periodo}
                    </Col>
                    <Col>
                        {props.crediti}
                    </Col>
                    <Col>
                        <Bell className='me-2'/>
                        <ClockFill/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}