import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell, ClockFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


export default function CourseSummary(props) {

    const { codice, nome, periodo, crediti } = props;

    //si possono rivedere i colori
    return (
        <ListGroup.Item className='course-summary'style={{marginBottom:'8px'}}>
            <Container className='p-0'>
                <Row>
                    <Col xs={2} className='course-detail'>
                        {props.codice}
                    </Col>
                    <Col xs={7} className='course-detail' style={{marginLeft:'8px'}}>
                        <Link
                         to={`/didattica/${props.nome}`}
                          state={{codice, nome, periodo, crediti}}
                          style={{color: '#FFFFFF', font: 'bold'}} >{props.nome}</Link>
                    </Col>
                    <Col xs={2}>
                        {props.crediti} CFU
                    </Col>
                    <Col className='p-0'>
                        
                        <ClockFill style={{marginBottom:'2px'}}/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}