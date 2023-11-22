import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';



export default function CourseSummary(props) {

    const { codice, nome, periodo, crediti, linkGuida } = props;

    return (
        <ListGroup.Item className='summary'style={{marginBottom:'8px'}}>
            <Container className='link-container p-0'
            as={Link}
            to={`/didattica/${props.nome}/materiale`}
            state={{codice, nome, periodo, crediti, linkGuida}}
            >
                <Row>
                    <Col xs={3} className='course-detail ps-2'>
                        {props.codice}
                    </Col>
                    <Col xs={6} className='course-detail ps-3'>
                        <span className='truncated'>
                        {props.nome}
                        </span>
                    </Col>
                    <Col xs={2} className='detail truncated px-0'>
                        {props.crediti} CFU
                    </Col>
                    <Col className='link-container p-0'>
                        <Bell size={20}/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}