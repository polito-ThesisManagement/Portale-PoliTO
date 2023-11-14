import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';


export default function ProvisionalGrade(props) {

    return (
        <ListGroup.Item className='summary'style={{marginBottom:'8px'}}>
            <Container className='p-0'>
                <Row>
                    <Col xs={7} className='course-detail p-0' style={{marginLeft:'8px'}}>
                        {props.nome}
                    </Col>
                    <Col xs={2} className='course-detail p-0'>
                        {props.esito}
                    </Col>
                    <Col className='p-0'>
                        {props.data}
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}