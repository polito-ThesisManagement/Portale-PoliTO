import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';


import Services from '../data/Data.json';
import Logo from '../assets/logo_polito.svg';
import Logo2 from '../assets/logo_polito_reduced.svg'
import '../styles/Utilities.css'

import { Link } from 'react-router-dom';
import { Bell, Envelope, PersonCircle } from 'react-bootstrap-icons';

export default function PoliNavbar() {
    return (
        <Navbar className="custom-navbar">
            <Container fluid>
                <Navbar.Brand className="d-none d-lg-block" as={Link} to="https://www.polito.it/" style={{ width: 'auto', height: '57px', marginLeft: '-3px', marginRight: '36px' }}>
                    <Image
                        src={Logo}
                        alt="Logo PoliTo"
                        style={{ width: '100%', height: '100%' }}
                    />
                </Navbar.Brand>
                <Navbar.Brand className="d-block d-lg-none" as={Link} to="https://www.polito.it/" style={{ width: 'auto', height: '57px', marginLeft: '-3px', marginRight: '12px' }}>
                    <Image
                        src={Logo2}
                        alt="Logo PoliTo"
                        style={{ width: '51.44px', height: '100%' }}
                    />
                </Navbar.Brand>
                <Searchbar services={Services} />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    <Nav
                        className="my-0 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="https://mail.studenti.polito.it/?_task=mail&_mbox=INBOX" style={{ marginRight: '5px', marginTop: '9px' }}><Envelope size={28} color='#fff' /></Nav.Link>
                        <Nav.Link as={Link} to="/" style={{ marginRight: '12px', marginTop: '9px' }}><Bell size={28} color='#fff' /></Nav.Link>
                        <Navbar.Text className="text-style" style={{ fontWeight: '500', fontSize: '16px', color: '#fff', marginRight: '12px' }}>
                            <div className='d-none d-md-block'>
                            s123456
                            <br />
                            <span className='truncated'>Mario Rossi</span>
                            </div>
                        </Navbar.Text>
                        <Navbar.Brand>
                            <Dropdown>
                                <Dropdown.Toggle id='dropdown-icon'
                                    bsPrefix='e-caret-hide'
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                    }}>
                                    <PersonCircle size={48} color='#fff' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{right: 'auto', left: '-120px', fontFamily:'Montserrat, sans-serif',}}>
                                    <Dropdown.Item style={{fontWeight:'500'}}>Dati utente</Dropdown.Item>
                                    <Dropdown.Item style={{fontWeight:'500'}}>Cambia lingua</Dropdown.Item>
                                    <Dropdown.Item style={{fontWeight:'500'}}>Impostazioni account</Dropdown.Item>
                                    <Dropdown.Item style={{fontWeight:'500'}}>Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}