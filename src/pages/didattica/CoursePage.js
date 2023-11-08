import '../../styles/App.css';

import { Link, Outlet, useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row } from 'react-bootstrap';


import { ArrowRightShort } from 'react-bootstrap-icons';

export default function CoursePage() {
    const location = useLocation();
    const { codice, nome, periodo, crediti } = location.state;

    //outlet permette di creare sotto la navbar
    return (
        <>
            <div className="d-flex mt-3 mx-3">
                <div>
                    <Link to='/'>Home</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <div>
                    <Link to='/opportunita'>Didattica</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <span style={{ color: '#808080' }}>{nome}</span>
            </div>
            <Container className='mt-3'>
                <Row>
                    <div className="d-flex mx-3">
                        <h1 style={{fontFamily: 'Montserrat'}}>{nome}</h1>
                        <Dropdown >
                            <Dropdown.Toggle className='mt-2 ms-3' style={{backgroundColor: '#B75E00'}} id="dropdown-basic">
                                2023/2024
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>2022/2023</Dropdown.Item>
                                <Dropdown.Item>2021/2022</Dropdown.Item>
                                <Dropdown.Item>2020/2021</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </Row>

                <ButtonGroup className='my-3 mx-3' aria-label="Course Section">
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/materiale`} state={{ codice, nome, periodo, crediti }}>Materiale</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/avvisi`} state={{ codice, nome, periodo, crediti }}>Avvisi</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/orario`} state={{ codice, nome, periodo, crediti }}>Orario Corso</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/guida`} state={{ codice, nome, periodo, crediti }}>Guida</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/moodle`} state={{ codice, nome, periodo, crediti }} disabled>Moodle</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/elaborati`} state={{ codice, nome, periodo, crediti }}>Elaborati</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/appelli`} state={{ codice, nome, periodo, crediti }}>Appelli</Button>
                    <Button className='didattica-button me-2 rounded' as={Link} to={`/didattica/${nome}/vclassrom`} state={{ codice, nome, periodo, crediti }}>Virtual Classrom</Button>
                    {/* c'è spazio anche far apparire Cpd*/}
                </ButtonGroup>
            </Container>

            <Outlet />
        </>
    );

}