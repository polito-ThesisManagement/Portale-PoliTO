import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { ArrowLeft, ArrowRight, Search, Grid } from 'react-bootstrap-icons';

export default function Materiale() {

    return (
        <>
            <Row className='my-4'>
                <Col lg={1}>
                    <ArrowLeft size={28} />
                    <ArrowRight size={28} className='ms-2' />
                </Col>
                <Col lg={5}>
                    <Form.Control className="form-control-materiale" type="text" placeholder="Materiale didattico/Lab1" readOnly />
                </Col>
                <Col lg={4}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Cerca all'interno del materiale..."
                            aria-label="Cerca Materiale"
                            aria-describedby="basic-addon2"
                            className='form-control-materiale'
                        />
                        <InputGroup.Text id="basic-addon2" style={{ border: '2px', borderColor: 'black' }} >
                            <Search />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={2}>
                    <Button variant='secondary'>
                        <Grid size={28} />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <Container className='custom-container'>


                    </Container>
                </Col>

                <Col lg={9}>
                    <Container className='custom-container'>


                    </Container>
                </Col>
            </Row>

        </>
    );

}