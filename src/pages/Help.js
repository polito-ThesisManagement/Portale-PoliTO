import React, {useState} from "react";

import Guide from "../data/Guide.json";
import '../styles/Utilities.css';

import { Container, Row, Col, Accordion } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Title from "../components/Title";
import { Search } from 'react-bootstrap-icons';
import { FaInfoCircle, FaBook } from 'react-icons/fa';
import { FaTicketSimple } from "react-icons/fa6";
import { HiMiniTicket } from "react-icons/hi2";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "react-router-dom";

import TicketCategories from "../data/TicketCategories.json"


export default function Help() {

    const [search, setSearch] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(TicketCategories);

    const [showCategory, setShowCategory] = useState(false);
    const [clickedCategory, setClickedCategory] = useState('');

    const handleSearch = (event) => {
        const eventSearched = event.target.value.toLowerCase();
        setSearch(eventSearched);

        const filtered = TicketCategories.filter(cat =>
            cat.category.toLowerCase().includes(eventSearched)
        );

        setFilteredCategories(filtered);
    };

    const handleCategorieClick = (category) => {
        const cat = category.category;
        setShowCategory(true);
        setClickedCategory(cat);
    }

    return (
        <>
            <Title
                icon={<FaInfoCircle size={28} />}
                sectionName='Help'
            />
            <Row>
                <Col md={12} lg={5}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaTicketSimple size={20} className='subsection-icon' />
                                Ticket
                            </span>
                        </div>
                        <InputGroup className="my-3">
                            <Form.Control
                                placeholder="Cerca tra le FAQ..."
                                aria-label="FAQ Search"
                                aria-describedby="basic-addon2"
                                style={{ backgroundColor: '#F0F3F5', color:'#002B49' }}
                                value={search}
                                onChange={handleSearch}
                            />
                                <InputGroup.Text id="basic-addon2">
                                    <Search className="search-icon" />
                                </InputGroup.Text>
                        </InputGroup>
                        <ListGroup style={{ borderRadius: '16px' }}>
                            {filteredCategories.map((cat) => {
                                return (
                                    <ListGroup.Item
                                        key={cat.key}
                                        className={`ticket-category  ${cat.category === clickedCategory ? 'active' : ''}`}
                                        style={{ marginBottom: '5px' }}
                                        action onClick={() => handleCategorieClick(cat)}>
                                        {cat.category}
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Container>
                </Col>
                <Col lg={4}>
                    {showCategory && 
                    <Container className='custom-container'>
                        <Accordion className="py-3">
                        <Accordion.Item eventKey="0" className="ticket-accordion">
                            <Accordion.Header>
                                Domanda 1
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="ticket-accordion mt-2">
                            <Accordion.Header>
                                Domanda 2
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="ticket-accordion mt-2">
                            <Accordion.Header>
                                Domanda 3
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        
                        

                        <div className="text-center mt-3 mb-2">
                            <h5 className="text-style">Non hai trovato quello che cerchi?</h5>
                            <Button className="custom-button mt-2">Apri un ticket</Button>
                        </div>

                    </Container>
                    }
                </Col>
                <Col md={12} lg={3}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaBook size={20} className='subsection-icon' />
                                Guide
                            </span>
                        </div>
                        <ListGroup>
                            {Guide.map(guida => {
                                return (
                                    <ListGroup.Item key={guida.guida} className="px-1" style={{ border: "hidden" }} >
                                        <Link to={guida.link}
                                            target='_blank'
                                            className="custom-link mb-auto">
                                            <TiArrowForward className='me-1' style={{ marginBottom: '2px' }} />
                                            {guida.guida}</Link>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Container>

                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <HiMiniTicket size={20} className='subsection-icon' />
                                I tuoi ticket recenti
                            </span>
                        </div>
                        <ListGroup style={{ borderRadius: '16px' }}>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '4px' }}>
                                Oggetto ticket 1 <br></br> - Chiuso
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '4px' }}>
                                Oggetto ticket 2 <br></br>
                                - Chiuso
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="summary"
                                style={{ marginBottom: '4px' }}>
                                Oggetto ticket 3 <br></br>
                                - Aperto
                            </ListGroup.Item>

                        </ListGroup>
                        <div className="text-center">
                            <Button className="custom-button mt-2">Consulta i tuoi ticket</Button>
                        </div>
                    </Container>
                </Col>
            </Row>

        </>
    );

}