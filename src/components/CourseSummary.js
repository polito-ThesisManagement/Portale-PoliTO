import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell, ClockFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


export default function CourseSummary(props) {

    const { codice, nome, periodo, crediti, linkGuida } = props;

    return (
        <ListGroup.Item className='summary'style={{marginBottom:'8px'}}>
            <Container className='p-0'>
                <Row>
                    <Col xs={3} className='course-detail'>
                        {props.codice}
                    </Col>
                    <Col xs={6} className='course-detail'>
                        <Link
                            to={`/didattica/${props.nome}/materiale`}
                            state={{codice, nome, periodo, crediti, linkGuida}}
                            className='truncated-link'
                        >
                        {props.nome}
                        </Link>
                    </Col>
                    <Col xs={2} className='detail px-0'>
                        {props.crediti} CFU
                    </Col>
                    <Col className='p-0'>
                        <Bell size={20}/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}