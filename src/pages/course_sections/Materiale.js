import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { ListGroup, ListGroupItem } from 'react-bootstrap';


import { ArrowLeft, ArrowRight, Search, Grid, FolderFill, Folder2Open, FolderSymlinkFill, Dropbox, FilePdf } from 'react-bootstrap-icons';

export default function Materiale() {

    return (
        <>
            <h3 className='text-style mt-3'>Materiale</h3>
            <Row className='my-4'>
                <Col lg={2} xs={3} md={3}>
                    <ArrowLeft size={28} />
                    <ArrowRight size={28} className='ms-2' />
                </Col>
                <Col lg={5} md={7} xs={7}>
                    <Form.Control className="form-control-materiale mb-2" type="text" placeholder="Materiale didattico/Lab1" readOnly />
                </Col>
                <Col lg={4} xs={7}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Cerca all'interno del materiale..."
                            aria-label="Cerca Materiale"
                            aria-describedby="basic-addon2"
                            className='form-control-materiale mb-2'
                        />
                        <InputGroup.Text id="basic-addon2" style={{ border: '2px', borderColor: 'black' }} >
                            <Search />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={1}>
                    <Button className='mb-2' variant='secondary'>
                        <Grid size={28} />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={4} sm={6} xs={7}>
                    <Container className='custom-container'>
                        <ListGroup>
                            <ListGroupItem style={{border: 'hidden'}}>
                                <FolderSymlinkFill size={25} />
                                <span className='ms-2 text-style' style={{fontWeight: 'bold'}}>Materiale didattico</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-2' style={{border: 'hidden'}}>
                                <FolderFill size={20} />
                                <span className='ms-2 text-style'>Casi studio</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-2' style={{border: 'hidden'}}>
                                <Folder2Open size={20} />
                                <span className='ms-2 text-style'>Labs</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-4' style={{border: 'hidden', backgroundColor: '#EF7B00', maxWidth: '100px', borderRadius: '10px'}}>
                                <FolderFill size={20} />
                                <span className='ms-2 text-style'>Lab1</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-4' style={{border: 'hidden'}}>
                                <FolderFill size={20} />
                                <span className='ms-2 text-style'>Lab2</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-2' style={{border: 'hidden'}}>
                                <FolderFill size={20} />
                                <span className='ms-2 text-style'>Lezioni</span>
                            </ListGroupItem>
                            <ListGroupItem className='ms-2' style={{border: 'hidden'}}>
                                <FolderFill size={20} />
                                <span className='ms-2 text-style'>Progetti</span>
                            </ListGroupItem>
                            <ListGroupItem style={{border: 'hidden'}}>
                                <Dropbox size={25} />
                                <span className='ms-2 text-style' style={{fontWeight: 'bold'}}>Dropbox</span>
                            </ListGroupItem>
                        </ListGroup>

                    </Container>
                </Col>

                <Col lg={9} md={8} sm={6} xs={3}>
                    <Container className='custom-container'>
                        <div className='pt-2'>
                            <FilePdf className='ms-1' size={30} />
                            <h6 className='text-style' style={{fontSize: '10px'}}>Lab Text</h6>
                        </div>


                    </Container>
                </Col>
            </Row>

        </>
    );

}