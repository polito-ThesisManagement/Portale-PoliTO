import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';


import Services from '../data/Data.json';
import Logo from '../assets/logo_polito.svg';
import '../styles/Navbar.css'
import '../styles/Utilities.css'

import { Link } from 'react-router-dom';
import { Bell, Envelope, PersonCircle } from 'react-bootstrap-icons';

//Ovviamente deve essere cambiata al momento è utile per testare la navigazione in react e cambiare le pagina
//TODO: cambiare navigazione click su icone

export default function PoliNavbar() {
    return (
        <Navbar className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" style={{ width: 'auto', height: '57px', marginLeft: '-3px', marginRight: '36px' }}>
                    <Image
                        src={Logo}
                        alt="Logo PoliTo"
                        style={{ width: '100%', height: '100%' }}
                    />
                </Navbar.Brand>
                <Searchbar services={Services} />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/libretto" style={{ marginRight: '5px', marginTop: '9px' }}><Envelope size={28} color='#fff' /></Nav.Link>
                        <Nav.Link as={Link} to="/tesi" style={{ marginRight: '12px', marginTop: '9px' }}><Bell size={28} color='#fff' /></Nav.Link>
                        <Navbar.Text className="text-style" style={{ fontWeight: '500', fontSize: '16px', color: '#fff', marginRight: '12px' }}>
                            s123456
                            <br />
                            Mario Rossi
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

                                <Dropdown.Menu style={{right: 'auto', left: '-70px'}}>
                                    <Dropdown.Item>s123456</Dropdown.Item>
                                    <Dropdown.Item>Mario Rossi</Dropdown.Item>
                                    <Dropdown.Item>Imposta Lingua</Dropdown.Item>
                                    <Dropdown.Item>Impostazioni</Dropdown.Item>
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}