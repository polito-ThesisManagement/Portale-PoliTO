import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell, ClockFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


export default function CourseSummary(props) {

    const { codice, nome, periodo, crediti } = props;

    //si possono rivedere i colori
    return (
        <ListGroup.Item className='mb-2 course-summary'>
            <Container className='p-0'>
                <Row>
                    <Col xs={2} className='course-detail'>
                        {props.codice}
                    </Col>
                    <Col xs={8} className='course-detail' style={{marginLeft:'8px'}}>
                        <Link
                         to={`/didattica/${props.nome}`}
                          state={{codice, nome, periodo, crediti}}
                          style={{color: '#FFFFFF', font: 'bold'}} >{props.nome}</Link>
                    </Col>
                    <Col className='p-0'>
                        <Bell style={{marginRight:'10px', marginBottom:'2px'}}/>
                        <ClockFill style={{marginBottom:'2px'}}/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}