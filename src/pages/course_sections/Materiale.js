import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


import { Search, Grid, FolderFill, Folder2Open, FolderSymlinkFill, Dropbox } from 'react-bootstrap-icons';
import { FaArrowLeft, FaArrowRight, FaFilePdf } from "react-icons/fa";
export default function Materiale() {

    return (
        <>
            <Container className='custom-container pt-3 pb-2'>
                <Row className='mb-1'>
                    <Col md={6} className='d-flex' style={{marginTop:'9px'}}>
                        <FaArrowLeft size={20} className='ms-2' />
                        <FaArrowRight size={20} className='ms-4' />
                        <Form.Control
                            className="form-control-materiale ms-4 truncated"
                            style={{position:'relative', bottom:'9px', height:'40px'}}
                            type="text"
                            placeholder="Materiale didattico/Labs/Lab1"
                            readOnly />
                    </Col>
                    <Col className='p-0' sm={0} md={1}/>
                    <Col md={5} className='d-flex'>
                        <InputGroup>
                            <Form.Control
                                placeholder="Cerca all'interno del materiale..."
                                aria-label="Cerca Materiale"
                                aria-describedby="basic-addon2"
                                style={{borderRadius:'8px', position:'relative', bottom:'1px'}}
                                className='form-control-materiale mb-2 pe-4 truncated'
                            />
                            <Search
                                style={{
                                    position: 'relative',
                                    zIndex: '3',
                                    right: '28',
                                    top: '11',
                                }}
                            />
                        </InputGroup>
                        <Button className='mb-2 px-2 pb-1' style={{position:'relative', bottom:'1px'}}>
                            <Grid size={24} style={{position:'relative', bottom:'3px'}} />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={3} className='mb-2'>
                        <Container className='file-container'>
                            <ListGroup>
                                <ListGroupItem className='file-element mt-1'>
                                    <FolderSymlinkFill size={25} />
                                    <span className='ms-2' style={{fontWeight: 'bold'}}>Materiale didattico</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                    <FolderFill size={20} />
                                    <span className='ms-2'>Casi studio</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                    <Folder2Open size={20} />
                                    <span className='ms-2'>Labs</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-5' style={{backgroundColor: '#006DB9', maxWidth: '100px', borderRadius: '10px', color:'white'}}>
                                    <Folder2Open size={20} />
                                    <span className='ms-2'>Lab1</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-5'>
                                    <FolderFill size={20} />
                                    <span className='ms-2'>Lab2</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
                                    <FolderFill size={20} />
                                    <span className='ms-2'>Lezioni</span>
                                </ListGroupItem>
                                <ListGroupItem className='file-element ms-3'>
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
                    <Col className='mb-2' xs={12} sm={9}>
                        <Container className='file-container'>
                            <div className='pt-3 px-3'>
                                <FaFilePdf size={30} style={{position:'relative', left:'13'}}/>
                                <div className='mt-1' style={{fontSize: '15px'}}>Lab1.pdf</div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            

        </>
    );

}