import '../../styles/Utilities.css';
import '../../styles/Text.css';

import { Link, Outlet, useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row } from 'react-bootstrap';

import { useState } from 'react';

import { ArrowRightShort } from 'react-bootstrap-icons';

export default function CoursePage() {
    const location = useLocation();
    const { codice, nome, periodo, crediti, linkGuida } = location.state;

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    //outlet permette di creare sotto la navbar
    return (
        <>
            {console.log(linkGuida)}
            <div className="d-flex mt-3 mx-3">
                <div>
                    <Link to='/' className='text-style'>Home</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <div>
                    <Link to='/didattica' className='text-style'>Didattica</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <span className='text-style' style={{ color: '#808080' }}>{nome}</span>
            </div>
            <Container className='mt-3'>
                <Row>
                    <div className="d-flex mx-3">
                        <span className='section-title'>{nome}</span>
                        <Dropdown >
                            <Dropdown.Toggle className=' ms-3' style={{ backgroundColor: '#B75E00' }} id="dropdown-basic">
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
                {/* Potremo personalizzare lo state ad esempio in materiale non serve linkGuida */}
                <ButtonGroup className='my-3 mx-3' aria-label="Course Section">
                    <Button className={`custom-button me-2 rounded ${activeButton === 'materiale' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/materiale`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('materiale')}>
                        Materiale
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'avvisi' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/avvisi`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('avvisi')}>
                        Avvisi
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'orario' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/orario`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('orario')}>
                        Orario Corso
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'guida' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/guida`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('guida')}>Guida</Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'moodle' ? 'active' : ''}`}
                        state={{ codice, nome, periodo, crediti, linkGuida }} disabled
                        onClick={() => handleButtonClick('moodle')}>
                        Moodle
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'elaborati' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/elaborati`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('elaborati')}>
                        Elaborati
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'appelli' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/appelli`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('appelli')}>
                        Appelli
                    </Button>
                    <Button className={`custom-button me-2 rounded ${activeButton === 'virtualClassrom' ? 'active' : ''}`}
                        as={Link} to={`/didattica/${nome}/vclassrom`}
                        state={{ codice, nome, periodo, crediti, linkGuida }}
                        onClick={() => handleButtonClick('virtualClassrom')}>
                        Virtual Classrom
                    </Button>
                    {/* c'è spazio anche far apparire Cpd*/}
                </ButtonGroup>
            </Container>

            <Outlet />
        </>
    );

}