import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


import { Search, Grid, FolderFill, Folder2Open, FolderSymlinkFill, Dropbox, FilePdf } from 'react-bootstrap-icons';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Materiale() {

    return (
        <>
            <Container className='custom-container py-2'>
            <Row>
                <Col lg={2} xs={3} md={3} className='mt-1'>
                    <FaArrowLeft size={20} className='ms-2' />
                    <FaArrowRight size={20} className='ms-3' />
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
            <Row className='mb-2'>
                <Col lg={3} md={4} sm={6} xs={7}>
                    <Container className='file-container'>
                        <ListGroup>
                            <ListGroupItem className='file-element mt-1'>
                                <FolderSymlinkFill size={25} />
                                <span className='ms-2' style={{fontWeight: 'bold'}}>Materiale didattico</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-2'>
                                <FolderFill size={20} />
                                <span className='ms-2'>Casi studio</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-2'>
                                <Folder2Open size={20} />
                                <span className='ms-2'>Labs</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-4' style={{backgroundColor: '#006DB9', maxWidth: '100px', borderRadius: '10px', color:'white'}}>
                                <Folder2Open size={20} />
                                <span className='ms-2'>Lab1</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-4'>
                                <FolderFill size={20} />
                                <span className='ms-2'>Lab2</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-2'>
                                <FolderFill size={20} />
                                <span className='ms-2'>Lezioni</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element ms-2'>
                                <FolderFill size={20} />
                                <span className='ms-2'>Progetti</span>
                            </ListGroupItem>
                            <ListGroupItem className='file-element'>
                                <Dropbox size={25} />
                                <span className='ms-2' style={{fontWeight: 'bold'}}>Dropbox</span>
                            </ListGroupItem>
                        </ListGroup>

                    </Container>
                </Col>

                <Col lg={9} md={8} sm={6} xs={3}>
                    <Container className='file-container'>
                        <div className='pt-2'>
                            <FilePdf className='ms-1' size={30} />
                            <h6 className='text-style' style={{fontSize: '10px'}}>Lab Text</h6>
                        </div>


                    </Container>
                </Col>
            </Row>

            </Container>
            

        </>
    );

}